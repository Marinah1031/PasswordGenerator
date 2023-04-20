// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var passwordEl = ""
  var userChoice = window.prompt("How many characters would you like the password to contain?")
  // Tried using for (var i = 8;...) etc, the prompt no longer showed up on my page.
  // tried to add additional conditons after but the prompt disapears.
  //console on windows displays as error so I cannot see if the special characters are showing
  // tried looping by adding a conditional again but it just gets rid of the prompt. 
  if (userChoice >= 8 && userChoice <= 128) {

    var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    var numberCharacter = window.confirm("Click OK to confirm including numbers.");
    var uppercaseCharacters = window.confirm("Click OK to confirm including uppercase characters.");
    var lowercaseCharacters = window.confirm("Click OK to confirm including lowercase characters.");
    var allCharacters = ""
    if (!specialCharacters && !numberCharacter && !uppercaseCharacters && !lowercaseCharacters){
      alert ("You must select atleast one character.")
      generatePassword ();
    } else {
    if (specialCharacters) {
      var special = "!@#$%^&*()_+=[]{}|;':</,.`~-?";
      allCharacters += special
      console.log (allCharacters)
    }
    if (numberCharacter) {
      var numbers = "1234567890"
      allCharacters += numbers
      console.log (allCharacters)
    }
    if (uppercaseCharacters) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
      allCharacters += uppercase
      console.log (allCharacters)
    }
    if (lowercaseCharacters) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz"
      allCharacters += lowercase
      console.log (allCharacters)
    }

    for (var i = 0; i < userChoice; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      const randomCharacter = allCharacters.charAt(randomIndex);
      passwordEl += randomCharacter
      console.log(randomIndex);
      console.log(randomCharacter);
    }
  }
  } else {
    window.alert("The number must be atleast 8 and less than 128.");
    //const randomIndex = Math.floor(Math.random() * specialCharacters.length);
    generatePassword();

  };



  return passwordEl;
  //if undefined, replace
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
