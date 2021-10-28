// Assignment code here
var string = "";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumber = "0123456789";
var charSpecial = "!@#$%^&*-_=+";


// window alert welcome
var welcome = window.alert("Welcome to my Password Generator! Let me ask you a few questions to serve your needs.");

// user chooses password length


var confirmPassLength = function() {
  var promptPassLength = prompt("How many characters long would you like your password to be? Please choose a number between 8 and 128.");
  if (promptPassLength >7 && promptPassLength < 129) {
    console.log("Your password length is " + promptPassLength + " characters long.");
    return promptPassLength;    
  } else {
    window.alert("Please choose a number between 8 and 128.");
    return confirmPassLength();
  }
  
    
  
};
passLength = confirmPassLength();

// user chooses whether to include lower case alphabet
var confirmPassLower = confirm("Would you like to include lowercase letters?");

  // if yes (true), store answer
  if (confirmPassLower) {
    console.log("You chose yes for lowercase letters.");
        
  } else {
    console.log("You chose no for lowercase letters.");
        
  };

// user chooses whether to include upper case alphabet
var confirmPassUpper = confirm("Would you like to include uppercase letters?");
  
  // if yes (true), store answer
  if (confirmPassUpper) {
    console.log("You chose yes for uppercase letters.");
    
  } else {
    console.log("You chose no for uppercase letters.");
    
  };
  
// user chooses whether to include numericals
var confirmPassNum = confirm("Would you like to include numbers?");
  
  // if yes (true), store answer
  if (confirmPassNum) {
    console.log("You chose yes for numbers.");
    
  } else {
    console.log("You chose no for numbers.");
    
  };
  
// user chooses whether to include special characters
var confirmPassSpec = confirm("Would you like to include special characters?");
  
  // if yes (true), store answer
  if (confirmPassSpec) {
    console.log("You chose yes for special characters.");
    
  } else {
    console.log("You chose no for special characters.");
    
  };

// add characters to string if selected
var characterPool = string;
  if (confirmPassLower) {
    characterPool += charLower;
  }
  if (confirmPassUpper) {
    characterPool += charUpper;
  }
  if (confirmPassNum) {
    characterPool += charNumber;
  }
  if (confirmPassSpec) {
    characterPool += charSpecial;
  }
  
console.log("Your available characters are " + characterPool + ".");

window.alert("Click the 'Generate Password' button below to view your password.")

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
