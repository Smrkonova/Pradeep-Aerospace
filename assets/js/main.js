// Load header
fetch('/./shared/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

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
