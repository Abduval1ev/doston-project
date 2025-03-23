document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainer = document.querySelector(".dropdown-container");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    console.log(dropdownContainer);


    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();

            if (dropdownContainer.classList.contains("active")) {
                dropdownContainer.classList.remove("active");
            } else {
                dropdownContainer.classList.add("active");
            }
        });
    });

    document.addEventListener("click", () => {
        dropdownContainer.classList.remove("active");
    });
});
