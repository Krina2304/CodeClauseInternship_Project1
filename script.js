document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetSectionId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
