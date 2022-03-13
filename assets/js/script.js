// Establish global variables
var char, num, low, cap, length;
var alpha = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*?';
var number = '0123456789';
var temp = '';
var password = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    document.querySelector("#password").value = start();
}

// Prompt user to choose password criteria
var start = function () {
    length = window.prompt("How long would you like your password to be? Choose between 8-128.");

    if (isNaN(length) || length < 8 || length > 128) {
        window.alert("Your password needs to be a number between 8-128 characters. Please try again.")
        start();
    } else {
        char = window.confirm("Would you like your password to contain special characters? (!@#$%^&*?)");
        num = window.confirm("Would you like your password to contain numbers?");
        low = window.confirm("Would you like your password to contain lower-case letters?");
        cap = window.confirm("Would you like your password to contain upper-case letters?");
    }

    if (cap) {
        temp += alpha.toUpperCase();
    };

    if (low) {
        temp += alpha;
    };

    if (char) {
        temp += special;
    };

    if (num) {
        temp += number;
    };

    for (let i = 0; i < length; i++) {
        password += temp[Math.floor(Math.random()*temp.length)];      
    }

    return password;
}