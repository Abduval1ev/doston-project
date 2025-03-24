document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainer = document.querySelector(".dropdown-container");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.getElementById("close");
    const menuItems = document.querySelectorAll(".heading--md");


    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            const dropdown = item.querySelector(".mobile-nav-lists");

            if (!dropdown) return;

            const isActive = dropdown.classList.contains("active-nav-list");

            document.querySelectorAll(".mobile-nav-lists").forEach((list) => {
                list.classList.remove("active-nav-list");
            });

            if (!isActive) {
                dropdown.classList.add("active-nav-list");
            }
        });
    });


    burgerMenu.addEventListener("click", function () {
        mobileMenu.classList.add("mobile-active");
    });

    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-active");
    });

    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();

            if (dropdownContainer.classList.contains("active-nav")) {
                dropdownContainer.classList.remove("active-nav");
            } else {
                dropdownContainer.classList.add("active-nav");
            }
        });
    });

    document.addEventListener("click", () => {
        dropdownContainer.classList.remove("active-nav");
    });
});
