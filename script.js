// Assignment Code
var generateBtn = document.querySelector("#generate");
//array of special characters (string)
//array of lowercase characters (string)
//array of uppercase characters (string)
//array of numeric characters (string)


//function that prompts the user for their password selections
    //var to store the lenght of the array
    //alert to ask for length of password, assign to lenght var

    // create conditanol " if user input is not a number rejects"
    //                    "if user  input 8>, rejects"
    //                   "if user input >128, rejects"

// var to store the users choice about special characters
 

//****** for yes or no questions. i will want to use confirms ******/
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
