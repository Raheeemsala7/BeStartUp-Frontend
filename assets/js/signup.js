document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email field cannot be empty.';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Invalid email format. Please use "example@domain.com".';
    }

    if (!password) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password field cannot be empty.';
    } else if (password.length < 6) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
    }

    if (isValid) {
        this.submit(); 
    }
});
