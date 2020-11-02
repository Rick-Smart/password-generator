// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var chars = 'abcdefghijklmnopqrstuvwxyz';
      var upperChars = chars.toUpperCase();
      var nums = "0123456789"
​
      console.log(getRandomValue(nums));
​
      function getRandomValue(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
