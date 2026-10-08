/* Savoré — interactive behaviour */
(function () {
    "use strict";

    var header = document.getElementById("header");
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("navMenu");
    var navLinks = document.querySelectorAll(".nav-link");

    /* Sticky header shadow */
    function onScroll() {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Mobile navigation */
    function closeMenu() {
        navMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }

    hamburger.addEventListener("click", function () {
        var isOpen = navMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    });

    /* Active nav link on scroll */
    var sections = Array.prototype.slice.call(
        document.querySelectorAll("section[id]")
    );

    function highlightLink() {
        var pos = window.scrollY + 140;
        var current = sections[0];

        sections.forEach(function (section) {
            if (section.offsetTop <= pos) current = section;
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current.id
            );
        });
    }
    window.addEventListener("scroll", highlightLink, { passive: true });
    highlightLink();

    /* Scroll reveal */
    var revealItems = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        revealItems.forEach(function (item) { observer.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add("visible"); });
    }

    /* Hero heading letter motion */
    var heroTitle = document.querySelector(".hero-content h1");

    if (heroTitle) {
        var letterIndex = 0;

        function splitLetters(node) {
            Array.prototype.slice.call(node.childNodes).forEach(function (child) {
                if (child.nodeType === 3) {
                    var frag = document.createDocumentFragment();

                    child.textContent.split("").forEach(function (ch) {
                        if (ch === " ") {
                            frag.appendChild(document.createTextNode(" "));
                            return;
                        }
                        var span = document.createElement("span");
                        span.className = "letter";
                        span.style.setProperty("--i", letterIndex++);
                        span.textContent = ch;
                        frag.appendChild(span);
                    });

                    node.replaceChild(frag, child);
                } else if (child.nodeType === 1 && child.tagName !== "BR") {
                    splitLetters(child);
                }
            });
        }

        splitLetters(heroTitle);

        if ("IntersectionObserver" in window) {
            var heroObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            heroTitle.classList.add("animate-letters");
                            heroObserver.disconnect();
                        }
                    });
                },
                { threshold: 0.2 }
            );
            heroObserver.observe(heroTitle);
        } else {
            heroTitle.classList.add("animate-letters");
        }
    }

    /* Footer year */
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
