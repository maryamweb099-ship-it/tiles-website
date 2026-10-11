/* TILECRAFT JAVASCRIPT */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation menu
    const menuButton = document.querySelector(
        ".menu-toggle, .mobile-menu-btn, #menu-toggle"
    );

    const navigation = document.querySelector(
        ".nav-links, .navbar-links, #nav-links"
    );

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });
    }

    // 2. Close mobile menu after clicking a link
    if (navigation) {
        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("menu-open");

                if (menuButton) {
                    menuButton.setAttribute("aria-expanded", "false");
                }
            });
        });
    }

    // 3. Automatically update the current year
    const yearElements = document.querySelectorAll(
        "#current-year, .current-year"
    );

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // 4. Page load effect
    document.body.classList.add("page-loaded");

    // 5. Contact form validation and notification
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            alert(
                "Your form has been submitted successfully!"
            );
        });
    }

});