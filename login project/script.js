const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Email check
    if (email.value === "") {
        showError(email, "Email is required");
        valid = false;
    } else {
        showSuccess(email);
    }

    // Password check
    if (password.value === "") {
        showError(password, "Password is required");
        valid = false;
    } else {
        showSuccess(password);
    }

    if (valid) {
        alert("Login Successful 🎉");
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
