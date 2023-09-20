// Function to toggle between sign-up and sign-in forms
const toggle = () => {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Function to handle user sign-up
const signup = async () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    try {
        // Create a new user with email and password
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        // Update the user's display name with the provided name
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        });

        alert('Sign up successful! You can now log in.');
    } catch (error) {
        alert(error.message);
    }
};

// Function to handle user login
const login = async () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        // Sign in with email and password
        await firebase.auth().signInWithEmailAndPassword(username, password);
        alert('Login successful!');
    } catch (error) {
        alert(error.message);
    }
};

// Initialize with sign-in form
const container = document.getElementById('container');
container.classList.add('sign-in');