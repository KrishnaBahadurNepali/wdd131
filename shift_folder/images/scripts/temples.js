// temples.js - For dynamic footer updates
window.onload = function() {
    // Set the current year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Set the last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Hamburger menu toggle for mobile view
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
};