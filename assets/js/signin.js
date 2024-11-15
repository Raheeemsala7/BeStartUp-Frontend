const toggleSpan = document.querySelector('.toggle-icon');
const passwordInput = document.querySelector('#password');

toggleSpan.addEventListener("click", () => {
    const toggleIcon = document.querySelector('.toggle-icon ');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = `<svg class="text-input-icons"   width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="eye-off">
                            <path id="Icon" d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213" stroke="#E3E3E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>`;
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = `
        <svg class="text-input-icons"  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Layer 2">
<g id="eye">
<path id="Vector" d="M21.8699 11.6449C21.2299 10.5349 17.7099 4.96489 11.7299 5.14489C6.19995 5.28489 2.99995 10.1449 2.12995 11.6449C2.04218 11.7969 1.99597 11.9694 1.99597 12.1449C1.99597 12.3204 2.04218 12.4929 2.12995 12.6449C2.75995 13.7349 6.12995 19.1449 12.0199 19.1449H12.2699C17.7999 19.0049 21.0099 14.1449 21.8699 12.6449C21.9577 12.4929 22.0039 12.3204 22.0039 12.1449C22.0039 11.9694 21.9577 11.7969 21.8699 11.6449ZM12.2199 17.1449C7.90995 17.2449 5.09995 13.5549 4.21995 12.1449C5.21995 10.5349 7.82995 7.24489 11.8299 7.14489C16.1199 7.03489 18.9399 10.7349 19.8299 12.1449C18.7999 13.7549 16.2199 17.0449 12.2199 17.1449Z" fill="#E3E3E3"/>
<path id="Vector_2" d="M12 8.64844C11.3078 8.64844 10.6311 8.85371 10.0555 9.23829C9.47993 9.62288 9.03133 10.1695 8.76642 10.809C8.50152 11.4486 8.4322 12.1523 8.56725 12.8313C8.7023 13.5102 9.03564 14.1338 9.52513 14.6233C10.0146 15.1128 10.6383 15.4461 11.3172 15.5812C11.9961 15.7162 12.6999 15.6469 13.3394 15.382C13.9789 15.1171 14.5256 14.6685 14.9101 14.0929C15.2947 13.5174 15.5 12.8407 15.5 12.1484C15.5 11.2202 15.1313 10.3299 14.4749 9.67356C13.8185 9.01719 12.9283 8.64844 12 8.64844ZM12 13.6484C11.7033 13.6484 11.4133 13.5605 11.1666 13.3956C10.92 13.2308 10.7277 12.9966 10.6142 12.7225C10.5007 12.4484 10.4709 12.1468 10.5288 11.8558C10.5867 11.5648 10.7296 11.2976 10.9393 11.0878C11.1491 10.878 11.4164 10.7351 11.7074 10.6773C11.9983 10.6194 12.2999 10.6491 12.574 10.7626C12.8481 10.8761 13.0824 11.0684 13.2472 11.3151C13.412 11.5618 13.5 11.8518 13.5 12.1484C13.5 12.5463 13.342 12.9278 13.0607 13.2091C12.7794 13.4904 12.3978 13.6484 12 13.6484Z" fill="#E3E3E3"/>
</g>
</g>
</svg>

        `;
    }
})
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('error').textContent = '';
    document.getElementById('error').style.display = 'none';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email && !password) {
        isValid = false;
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').textContent = 'email and password field cannot be empty.';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('error').textContent = 'Invalid email format. Please use "example@domain.com".';
        document.getElementById('error').style.display = 'block';
    }
    if (password) {
        if (password.length < 6) {
        isValid = false;
        document.getElementById('error').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('error').style.display = 'block';
    }
    }

    if (isValid) {
        this.submit();
    }
});
