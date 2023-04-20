// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var passwordEl = ""
  var userChoice = window.prompt("How many characters would you like the password to contain?")
  // Setting a condition to put more than 8 and less than 128 characters.
  if (userChoice >= 8 && userChoice <= 128) {
    // Defining variable and allowing computer to give a choice to confirm for the prompts asked.
    //each variable differs in name and cannot be repeated.
    var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    var numberCharacter = window.confirm("Click OK to confirm including numbers.");
    var uppercaseCharacters = window.confirm("Click OK to confirm including uppercase characters.");
    var lowercaseCharacters = window.confirm("Click OK to confirm including lowercase characters.");
    var allCharacters = ""

    //Setting condition that if all prompts are not met at the same time, program would come out with an error. 
    if (!specialCharacters && !numberCharacter && !uppercaseCharacters && !lowercaseCharacters) {
      alert("You must select atleast one character.")
      generatePassword();
    } else {
      // Conditions for each prompts asked including special characters, numbers, uppercase, and lowercase.
      if (specialCharacters) {
        var special = "!@#$%^&*()_+=[]{}|;':</,.`~-?";
        allCharacters += special
        console.log(allCharacters)
      }
      if (numberCharacter) {
        var numbers = "1234567890"
        allCharacters += numbers
        console.log(allCharacters)
      }
      if (uppercaseCharacters) {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
        allCharacters += uppercase
        console.log(allCharacters)
      }
      if (lowercaseCharacters) {
        var lowercase = "abcdefghijklmnopqrstuvwxyz"
        allCharacters += lowercase
        console.log(allCharacters)
      }
      // The for loop so that the prompt does not automatically disappear. With the i=0, it sets the term of where it begins.
      // The i<userChoice tells you the loop will break at the point of the user's choice number.
      // The i++ tells you that the increment increases by one each time it loops. 
      for (var i = 0; i < userChoice; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        const randomCharacter = allCharacters.charAt(randomIndex);
        passwordEl += randomCharacter
        console.log(randomIndex);
        console.log(randomCharacter);
      }
    }
    // If condition is not met, will display error message to choose a number within the condition. 
    // generatePassword(); will send the user back to the first prompt. 
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
