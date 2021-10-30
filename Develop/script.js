// Assignment code here
var characterPool = "";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumber = "0123456789";
var charSpecial = "!@#$%^&*-_=+";

// window alert welcome
var welcome = window.alert("Welcome to my Password Generator! Let me ask you a few questions to serve your needs.");

// user chooses password length
var confirmPassLength = function() {
  var promptPassLength = prompt("First of all, how many characters long would you like your password to be? Please choose a number between 8 and 128.");
  if (promptPassLength >7 && promptPassLength < 129) {
    console.log("Your password length is " + promptPassLength + " characters long.");
    return promptPassLength;    
  } else {
    window.alert("Please choose a number between 8 and 128.");
    return confirmPassLength();
  }
};
passLength = confirmPassLength();

// run a do/while loop asking to confirm criteria for characters
do {
  window.alert("Make sure to choose at least one of the following character parameters.");

  // ask about lower case letters
  var functionPassLower = function() {
    var confirmPassLower = confirm("Would you like to include lowercase letters in your password?");
    // if yes (true), store answer
    if (confirmPassLower) {
      console.log("You chose yes for lowercase letters.");
      return true;
    } else {
      console.log("You chose no for lowercase letters.");
    }
  }
  passLower = functionPassLower();
  console.log(passLower);

  // ask about capital letters
  var functionPassUpper = function() {
    var confirmPassUpper = confirm("How about some uppercase letters?");
    // if yes (true), store answer
    if (confirmPassUpper) {
      console.log("You chose yes for uppercase letters.");
      return true;
    } else {
      console.log("You chose no for uppercase letters.");
    }
  }
  passUpper = functionPassUpper();
  console.log(passUpper);

  // ask about numericals
  var functionPassNum = function() {
    var confirmPassNum = confirm("Could I convince you to include numbers?");
    // if yes (true), store answer
    if (confirmPassNum) {
      console.log("You chose yes for numbers.");
      return true;
    } else {
      console.log("You chose no for numbers.");
    }
  }
  passNum = functionPassNum();
  console.log(passNum);

  // ask about special characters
  var functionPassSpec = function() {
    var confirmPassSpec = confirm("And finally, how about some special characters? (Like !%&+)");
    // if yes (true), store answer
    if (confirmPassSpec) {
      console.log("You chose yes for special characters.");
      return true;
    } else {
      console.log("You chose no for special characters.");
    }
  }
  passSpec = functionPassSpec();
  console.log(passSpec);

  // condition for loop to run is all criteria return as not true
} while (passLower !== true && passUpper !== true && passNum !== true && passSpec !== true);

// add characters to string if selected
if (passLower === true) {
  characterPool += charLower;
}
if (passUpper === true) {
  characterPool += charUpper;
}
if (passNum === true) {
  characterPool += charNumber;
}
if (passSpec === true) {
  characterPool += charSpecial;
} 

// able to view all chosen characters in console  
console.log("Your available characters are " + characterPool + ".");

window.alert("Great! Now I need you to click the 'Generate Password' button that will appear below so you can view your password. If you don't like it, try hitting the 'Generate Password' button again!")

var generatePassword = function() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var pswrd = characterPool[Math.floor(Math.random() * characterPool.length)];
    password += pswrd;
  }
  console.log("Your password is " + password + ".");
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
