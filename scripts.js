// Theme toggle function
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const icon = themeToggle.querySelector("i");
    const html = document.documentElement;

    // Switch themes
    function switchTheme() {
        let currentTheme = html.getAttribute("data-bs-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        html.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Update icon
        if (newTheme === "dark") {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
        } else {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        }
    }

    // Event listener for toggle button
    themeToggle.addEventListener("click", switchTheme);

    // Immediately Invoked Function Expression (IIFE) to set theme on page load
    (function() {
        let savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            html.setAttribute("data-bs-theme", savedTheme);
        } else {
            let prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            html.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
        }

        // Set the correct icon on page load
        let currentTheme = html.getAttribute("data-bs-theme");
        if (currentTheme === "dark") {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
        } else {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        }
    })();
});
