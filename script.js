// Assignment code here
var char, num, low, cap, length;
var alpha = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*?';
var number = '0123456789';
var temp = '';
var password = '';

var start = function () {
length = window.prompt("How long would you like your password to be? Choose between 8-128.");

  if (isNaN(length) || length < 8 || length > 128) {
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
  }

  if (char) {
    temp += special;
  }

  if (num) {
    temp += number;
  };

}

for (let i = 0; i < length; i++) {
  password += temp[Math.floor(Math.random()*temp.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);