document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown > a").forEach(menu => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            let dropdown = menu.nextElementSibling;
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            console.log('Script Loaded');  // Check if this appears in the console

function toggleMenu() {
    console.log('Menu toggled');  // Check if this appears when the menu is clicked
    document.querySelector('.nav-links').classList.toggle('active');
}

        });
    });
});
