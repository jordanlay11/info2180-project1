/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = (emailInput.value || '').trim();
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!validEmail) {
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
        } else {
            messageDiv.textContent = `Thank you! Your email address \`${email}\` has been added to our mailing list!`;
            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');
            form.reset();
        }
    });
});