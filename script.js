document.addEventListener("DOMContentLoaded", function() {
    // This code will run after the document is fully loaded

    // Example of smooth scrolling for your navigation links
    document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Other scripts can be added here as needed
});