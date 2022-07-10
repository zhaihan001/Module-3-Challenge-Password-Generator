// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChars = "abcdefghijklmnopqrstuvwxyz";
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "0123456789";
var speChars = ` !"#$%&'()*+,-./:;<>=?@[]^_{}|~`;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    var passwordLength = window.prompt("Please choose a number from 8-128 to determine how many characters for your password. ");
    
    if (!passwordLength){
      passwordLength = null;
      return;
    }
    
    if ( (passwordLength<8) || (passwordLength>128) || (isNaN(passwordLength)) ){
      window.alert("Please only enter number between 8 and 128!");
      passwordLength = null;
      generatePassword();
    }

    var tempPasswordString="";

    if ( confirm("Do you want to include lower cases?")==true){
      tempPasswordString = lowChars;
    }
   
    if ( confirm("Do you want to include upper cases?")==true){
      tempPasswordString = tempPasswordString + upChars;
    }

    if ( confirm("Do you want to include numbers?")==true){
      tempPasswordString = tempPasswordString + numChars;
    }

    if ( confirm("Do you want to include special characters?")==true){
      tempPasswordString = tempPasswordString + speChars;
    }

    if ( tempPasswordString == "" ){
      window.alert("Please select at least one character type.");
      generatePassword();
    }
    else {
      var tempPasswordArray = tempPasswordString.split("");
    }

    var finalPassword=[];
    for ( i =0; i<passwordLength; i++) {
      finalPassword[i]=tempPasswordArray[Math.floor(Math.random()*tempPasswordArray.length)];
    }

    password=finalPassword.join("");
    window.alert("Your password is: "+password);
    return password;
  }

  return;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
