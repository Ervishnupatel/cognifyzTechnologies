// Form submit event
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Error spans
    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let passErr = document.getElementById("passError");
    let phoneErr = document.getElementById("phoneError");

    let valid = true;

    // Name validation
    if (name === "") {
        nameErr.innerText = "Name is required";
        valid = false;
    } else {
        nameErr.innerText = "";
    }

    // Email validation using regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailErr.innerText = "Enter a valid email";
        valid = false;
    } else {
        emailErr.innerText = "";
    }

    // Password validation
    if (password.length < 6) {
        passErr.innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        passErr.innerText = "";
    }

    // Phone validation: 10 digits only
    if (!/^\d{10}$/.test(phone)) {
        phoneErr.innerText = "Enter a valid 10-digit phone number";
        valid = false;
    } else {
        phoneErr.innerText = "";
    }

    // If all fields are valid
    if (valid) {
        let btn = document.getElementById("submitBtn");
        let successMsg = document.getElementById("successMsg");

        btn.classList.add("loading");
        btn.innerText = "Submitting...";
        btn.disabled = true;

        setTimeout(function () {
            btn.classList.remove("loading");
            btn.innerText = "Register";
            btn.disabled = false;

            successMsg.innerHTML = "<p class='success'>Form submitted successfully!</p>";

            document.getElementById("form").reset();
        }, 1500);
    }
});

// Clear error messages while typing
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        let errorSpan = document.getElementById(input.id + "Error");
        errorSpan.innerText = "";
    });
});
