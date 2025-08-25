// Load header
fetch('/./shared/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // After header is loaded, highlight active link
        const currentPath = window.location.pathname; // e.g. "/about.html" or "/schools"
        const navLinks = document.querySelectorAll('.header__middle a');

        navLinks.forEach(link => {
            // Compare link href with current path
            const linkPath = new URL(link.href).pathname;

            if (linkPath === currentPath) {
                link.classList.add('active'); // Add active class
            }
        });
    });
// Load footer
fetch('/./shared/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Load logo
fetch('/./shared/logo.html')
    .then(res => res.text())
    .then(data => document.getElementById('logo').innerHTML = data);

// Load contact
fetch('/./shared/contact.html')
    .then(res => res.text())
    .then(data => document.getElementById('contact').innerHTML = data);
