const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("signupEmail");
const password = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Username
    if (username.value === "") {
        showError(username, "Username is required");
        valid = false;
    } else {
        showSuccess(username);
    }

    // Email
    if (email.value === "") {
        showError(email, "Email is required");
        valid = false;
    } else {
        showSuccess(email);
    }

    // Password
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        valid = false;
    } else {
        showSuccess(password);
    }

    // Confirm Password
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        valid = false;
    } else {
        showSuccess(confirmPassword);
    }

    if (valid) {
        alert("Signup Successful 🎉");
        form.reset();
    }
});

function showError(input, message) {
    const small = input.parentElement.querySelector(".error");
    small.innerText = message;
    input.style.borderColor = "red";
}

function showSuccess(input) {
    const small = input.parentElement.querySelector(".error");
    small.innerText = "";
    input.style.borderColor = "green";
}
