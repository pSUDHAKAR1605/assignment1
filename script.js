document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const role = document.getElementById('role').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (role && email && password) {
                console.log('Role:', role);
                console.log('Email:', email);
                sessionStorage.setItem('userRole', role);
                sessionStorage.setItem('userEmail', email);
                sessionStorage.setItem('userPassword', password);
                window.location.href = 'enrollment.html';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        const role = sessionStorage.getItem('userRole');
        if (role === 'student') {
            contentDiv.innerHTML = '<h3>Welcome Student</h3><p>Here you can view your courses and grades.</p>';
        } else if (role === 'staff') {
            contentDiv.innerHTML = '<h3>Welcome Staff</h3><p>Here you can manage student enrollments and view reports.</p>';
        } else if (role === 'parent') {
            contentDiv.innerHTML = '<h3>Welcome Parent</h3><p>Here you can view your child\'s progress and enrollments.</p>';
        } else {
            contentDiv.innerHTML = '<h3>Access Denied</h3><p>No role selected or invalid access.</p>';
        }
    }
});
