document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const role = document.getElementById('role').value;
    
    if (role) {
        switch (role) {
            case 'student':
                window.location.href = 'student.html';
                break;
            case 'staff':
                window.location.href = 'staff.html';
                break;
            case 'parent':
                window.location.href = 'parent.html';
                break;
            default:
                alert('Unknown role selected.');
                break;
        }
    }
});
