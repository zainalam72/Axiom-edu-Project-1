const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

// Functionn to update class and message for errors
function showError(input , message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add error
    formControl.className = "form-control error"
    // Get the small element for the error message 
    const small = formControl.querySelector("small");
    //  Override the text for small element using the input message
    small.innerText = message;
}

// Function to update class and message for success
function showSuccess(input , message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add error
    formControl.className = "form-control success"
}

// Create event listener for submit button

form.addEventListener("submit" , function(e) {
    // Stop page from reloading on submit 
    e.preventDefault();
    
    // Check if username input is empty.    
    if (username.value === "") {
        showError(username, "username is required");
    } else {
        showsuccess(username);
    }

    // Check if email input is empty.    
    if (email.value === "") {
        showError(email, "email is required");
    } else {
        showsuccess(email);
    }

    // Check if password input is empty.    
    if (password.value === "") {
        showError(password, "password is required");
    } else {
        showsuccess(password);
    }

    // Check if password2 input is empty.    
    if (password2.value === "") {
        showError(password2, "password2 is required");
    } else {
        showsuccess(password2); 
    }
});
