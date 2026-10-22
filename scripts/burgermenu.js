const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.getElementById("primaryNavigation");

if (navbar && navToggle && primaryNavigation) {
    const closeNavigation = () => {
        navbar.classList.remove("navbar--menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Åbn navigation");
    };

    navToggle.addEventListener("click", () => {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navbar.classList.toggle("navbar--menu-open", !isExpanded);
        navToggle.setAttribute("aria-expanded", String(!isExpanded));
        navToggle.setAttribute("aria-label", isExpanded ? "Åbn navigation" : "Luk navigation");
    });

    primaryNavigation.addEventListener("click", event => {
        if (event.target.closest("a")) closeNavigation();
    });

    window.matchMedia("(min-width: 1201px)").addEventListener("change", event => {
        if (event.matches) closeNavigation();
    });
}
