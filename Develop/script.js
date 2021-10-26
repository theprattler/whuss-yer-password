// Assignment code here
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumber = "0123456789";
var charSpecial = "!@#$%^&*-_=+";

// window alert welcome
var welcome = window.alert("Welcome to my Password Generator! Let me ask you a few questions to serve your needs.");

// user chooses password length
var passwordLength = function() {
  // ask user to choose between 8 and 128 characters
  var promptPassLength = "";
  while (promptPassLength === "" || promptPassLength === null) {
    promptPassLength = prompt("How many characters long would you like your password to be? Please choose a number between 8 and 128.");
  }
  console.log("Your password length is " + promptPassLength + " characters long.");

  // conditional recursive function call
  if (promptPassLength < 8 || promptPassLength > 128) {
    window.alert("Please choose a number between 8 and 128.");
    return passwordLength();
  }
};

// user chooses whether to include lower case alphabet
var lowerCaseOption = function() {
  var promptPassLower = window.prompt("Would you like to include lowercase letters? Type YES or NO.");

  if (promptPassLower === "" || promptPassLower === null) {
    window.alert("You need to provide a valid answer. Please type YES or NO");
  }

  promptPassLower = promptPassLower.toLowerCase();

  
}

var generatePassword = function() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

passwordLength();
lowerCaseOption();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
