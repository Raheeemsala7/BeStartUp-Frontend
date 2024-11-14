const toggleSpan = document.querySelector('.toggle-icon');
const passwordInput = document.querySelector('.password');

toggleSpan.addEventListener("click", () => {
    const toggleIcon = document.querySelector('.toggle-icon img');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '../../assets/svg/visible-icon.svg'; 
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '../../assets/svg/Layer 2.svg';
    }
})
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
        isValid = false;
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('email-error').textContent = 'Email field cannot be empty.';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Invalid email format. Please use "example@domain.com".';
        document.getElementById('email-error').style.display = 'block';
    }

    if (!password) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password field cannot be empty.';
        document.getElementById('password-error').style.display = 'block';
    } else if (password.length < 6) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('password-error').style.display = 'block';
    }

    if (isValid) {
        this.submit();
    }
});
