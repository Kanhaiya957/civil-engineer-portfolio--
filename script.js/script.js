// Initialize the AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // Global settings:
        duration: 1000, // Duration of the animation (in milliseconds)
        once: true,     // Whether animation should only happen once - highly recommended for portfolios
        offset: 50,     // Offset (in px) from the original trigger point
        easing: 'ease-in-out', // Default easing for animations
    });
});

// Optional: Add basic form validation/submission logic here if needed
// For now, it just initializes the animation library.
// Example for form submission (replace with actual backend logic):
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission

    // In a real application, you would send this data to a server (e.g., using fetch API)
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});
