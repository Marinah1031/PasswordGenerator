// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword (){ 
  var userChoice = window.prompt("How many characters would you like the password to contain?")
// Tried using for (var i = 8;...) etc, the prompt no longer showed up on my page.
// tried to add additional conditons after but the prompt disapears.
//console on windows displays as error so I cannot see if the special characters are showing
// tried looping by adding a conditional again but it just gets rid of the prompt. 
if (userChoice >= 8) {
  var specialCharacters = window.confirm("Click OK to confirm including special characters.");
  if (specialCharacters) {
    const specialCharacters = "!@#$%^&*()_+=[]{}|;':</,.`~-?";

    const randomCharacter = specialCharacters.charAt(randomIndex);
    // var specialChar = password += randomCharacter
    console.log (randomCharacter)
  }
} else {
  window.prompt("The number must be atleast 8.");
 // const randomIndex = Math.floor(Math.random() * specialCharacters.length);
};

for (var i =0; i < passwordLength)

return password;
//if undefined, replace
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
