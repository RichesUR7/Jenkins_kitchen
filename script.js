// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert
const orderForm = document.querySelector('form'); // Adjust selector based on your form
if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // You can add form validation logic here

        // Alert on form submission (you may replace this with actual order processing logic)
        alert('Thank you for your order! We will contact you soon.');

        // Clear the form
        orderForm.reset();
    });
}

