document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }

    // التحقق من كلمة المرور
    if (!password || password.length < 6) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
    }

    // إذا كانت جميع البيانات صحيحة، يتم إرسال النموذج
    if (isValid) {
        this.submit(); // إرسال النموذج
    }
});