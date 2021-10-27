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
  return promptPassLength;

  /* conditional recursive function call
  if (promptPassLength < 8 || promptPassLength > 128) {
    window.alert("Please choose a number between 8 and 128.");
    return passwordLength();
  }*/
};

// user chooses whether to include lower case alphabet
var lowerCaseOption = function() {
  var confirmPassLower = confirm("Would you like to include lowercase letters?");

  // if yes (true), store answer
  if (confirmPassLower) {
    console.log("You chose yes for lowercase letters.");
  } else {
    console.log("You chose no for lowercase letters.");
  }

  /* conditional recursive fun
  if () {
    window.alert("You need to provide a valid answer. Please type YES or NO.");
    return lowerCaseOption();
  }*/

  return confirmPassLower;
};

// user chooses whether to include upper case alphabet
var upperCaseOption = function() {
  var confirmPassUpper = confirm("Would you like to include uppercase letters?");
  
  // if yes (true), store answer
  if (confirmPassUpper) {
    console.log("You chose yes for uppercase letters.");
  } else {
    console.log("You chose no for uppercase letters.")
  }
  /*if (promptPassUpper === "" || promptPassUpper === null) {
    window.alert("You need to provide a valid answer. Please type YES or NO.");
    return upperCaseOption();
  }*/

  return confirmPassUpper;
};

// user chooses whether to include numericals
var numberOption = function() {
  var confirmPassNum = confirm("Would you like to include numbers?");
  
  // if yes (true), store answer
  if (confirmPassNum) {
    console.log("You chose yes for numbers.");
  } else {
    console.log("You chose no for numbers.");
  }
  
    /*window.alert("You need to provide a valid answer. Please type YES or NO.");
    return numberOption();
  }*/

  return confirmPassNum;
};

// user chooses whether to include special characters
var specialOption = function() {
  var confirmPassSpec = confirm("Would you like to include special characters?");
  
  // if yes (true), store answer
  if (confirmPassSpec) {
    console.log("You chose yes for special characters.");
  } else {
    console.log("You chose no for special characters.");
  }
    /*("You need to provide a valid answer. Please type YES or NO.");
    return specialOption();
  }*/

  return confirmPassSpec;
};

// password info array
var passwordInfo = [
  {

  }
];


var generatePassword = function() {

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

passwordLength();
lowerCaseOption();
upperCaseOption();
numberOption();
specialOption();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
