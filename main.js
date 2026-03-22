document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll ONLY for internal links (and NOT CTA buttons)
    document.querySelectorAll('a[href^="#"]:not(.cta-button)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

    // Newsletter Subscription Simulation
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input').value;
            console.log(`Subscribing email: ${email}`);
            
            // UI Feedback
            subscribeForm.style.display = 'none';
            document.getElementById('sub-msg').style.display = 'block';
            
            // In a real scenario, you'd use a service like Formspree:
            // fetch('https://formspree.io/f/your-id', {
            //     method: 'POST',
            //     body: new FormData(subscribeForm)
            // });
        });
    }

    // Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form data submitted:', Object.fromEntries(formData));

            // UI Feedback
            contactForm.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
            document.getElementById('form-msg').style.display = 'block';

            // In a real scenario, you'd use a service like Formspree:
            // fetch('https://formspree.io/f/your-id', {
            //     method: 'POST',
            //     body: formData
            // });
        });
    }

    // Add scroll animation for nav
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.padding = '1rem 0';
            nav.style.background = 'var(--bg-nav)';
        }
    });
});
