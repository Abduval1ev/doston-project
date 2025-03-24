document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainer = document.querySelector(".dropdown-container");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.getElementById("close");

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
