function signupHandler(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const usernameInput = document.getElementById('username');
    const enteredUsername = usernameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    if (enteredUsername.trim() === '') {
        alert('Invalid input - username must not be empty');
        return;
    }

    const user = {
        username: enteredUsername,
        password: enteredPassword
    };

    console.log(user);
    alert(`User created:\nUsername: ${user.username}`);
}

const form = document.getElementById('user-input');
form.addEventListener('submit', signupHandler);
