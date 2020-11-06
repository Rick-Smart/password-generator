// Assignment Code
// This is the generate button
const generateBtn = document.querySelector("#generate");

// This is where the password will be printed to the screen
const passwordText = document.querySelector("#password");

// password length value
const passLength = document.querySelector("#passwordLength");

// password options
const lowerChar = document.querySelector("#lowerCase");
const upperChar = document.querySelector("#upperCase");
const specialChar = document.querySelector("#specialCharacters");
const userNumbers = document.querySelector("#numbers");

// all of my password arrays
const letters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = letters.toUpperCase();
const charSpecial = "!@#$%^&*()_+";
const nums = "0123456789";

function generatePassword() {
  // this is used to store the input from the user before generating the password
  let assemblePassword = "";
  //this is used to store the password
  let password = "";
  // this checkes to see what boxes the user has selected
  if (lowerChar.checked) {
    assemblePassword += letters;
  }
  if (upperChar.checked) {
    assemblePassword += upperLetters;
  }
  if (specialChar.checked) {
    assemblePassword += charSpecial;
  }
  if (userNumbers.checked) {
    assemblePassword += nums;
  }

  // this is the for loop that will randomize our password and assemble it
  for (var i = 0; i < slider.value; i++) {
    // this generates he random number you need to pick the characters that make up your password
    let randomNumber = Math.floor(Math.random() * assemblePassword.length);

    password += assemblePassword.charAt(randomNumber);

    console.log(password);
  }
  // this puts the new password in the text area of the html
  document.querySelector("#password").textContent = password;

  // this is the curly bracket that closes generatePassword
}

// slider funtion
let slider = document.getElementById("passwordLength");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
