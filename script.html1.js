document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon.`);
            
            // Here, you can add AJAX code to send the form data to your server if needed.
        });
    }
});
