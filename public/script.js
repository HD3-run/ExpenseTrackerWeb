const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Call login API
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            alert('Invalid credentials');
        }
    })
    .catch((error) => console.error(error));
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // Call register API
    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, confirmPassword }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Redirect to login
            window.location.href = '/login';
        } else {
            alert('Registration failed');
        }
    })
    .catch((error) => console.error(error));
});
