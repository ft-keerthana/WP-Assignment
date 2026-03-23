// Registration Validation
document.getElementById("registerForm").addEventListener("submit", function(e) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
 
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault();
    }
 });
 
 // Login Validation
 document.getElementById("loginForm").addEventListener("submit", function(e) {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
 
    if (email === "" || password === "") {
        alert("All fields are required!");
        e.preventDefault();
    }
 });
 