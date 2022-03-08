// Assignment code here

var start = function () {
length = window.prompt("How long would you like your password to be? Choose between 8-128.");

  if (length < 8 || length > 128) {
      window.alert("Length chosen is outside acceptable parameters. Please try again.");
  } else {
      char = window.confirm("Would you like your password to contain special characters? (!@#$%^&*?)");
      num = window.confirm("Would you like your password to contain numbers?");
      low = window.confirm("Would you like your password to contain lower-case letters?");
      cap = window.confirm("Would you like your password to contain upper-case letters?");
  }
}
start();
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