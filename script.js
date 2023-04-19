// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var generateBtn = window.prompt("How many characters would you like the password to contain?")
if (generateBtn >= 8) {
  window.confirm("Click OK to confirm including special characters.");
} else {
  window.prompt("The number must be atleast 8.");
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
