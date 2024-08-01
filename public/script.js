document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Real-time validation for name
    nameInput.addEventListener('input', () => {
        const nameDesc = document.getElementById('name-desc');
        if (nameInput.value.trim() === '') {
            nameDesc.textContent = 'Name cannot be empty.';
            nameDesc.classList.remove('sr-only');
        } else {
            nameDesc.textContent = '';
            nameDesc.classList.add('sr-only');
        }
    });

    // Real-time validation for email
    emailInput.addEventListener('input', () => {
        const emailDesc = document.getElementById('email-desc');
        if (!validateEmail(emailInput.value)) {
            emailDesc.textContent = 'Please enter a valid email address.';
            emailDesc.classList.remove('sr-only');
        } else {
            emailDesc.textContent = '';
            emailDesc.classList.add('sr-only');
        }
    });
});
