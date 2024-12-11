document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.querySelector('.btn-apply');

    applyButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Thank you for applying! We will review your application and get back to you shortly.');
    });
});
