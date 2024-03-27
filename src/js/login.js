// login.js

// Assuming your login form has the id 'loginForm'
const loginForm = document.getElementById('loginContainer');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherEmail = document.getElementById('teacher-email').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (replace with your actual credentials)
    const validTeacherEmail = 'teacher@example.com';
    const validEmail = 'Teachers@MSU';
    const validPassword = 'securep@sswordMSU';

    // Assuming you want to check teacher's login first
    if (teacherEmail === validTeacherEmail && email === validEmail && password === validPassword) {
        // Successful login for teacher
        console.log('Successfully logged in as a teacher');
        window.location.href = 'teacher_portal.html';
        // Hide the login container on successful login
        loginForm.classList.add('hide');
    } else if (email === validEmail && password === validPassword) {
        // Successful login for regular user
        console.log('Successfully logged in');
        // Add the logic for regular user login here if needed
        // For now, let's just navigate somewhere
        window.location.href = 'some_page.html';
        // Hide the login container on successful login
        loginForm.classList.add('hide');
    } else {
        // Failed login
        console.error('Login failed. Invalid credentials.');
        // You might want to show an error message to the user
    }
});

function logout() {
    // Your logout logic here, if needed
}
