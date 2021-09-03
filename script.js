//Special Characters for password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Set of numbers for the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Lowercase letters for the password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Uppercase letters for the password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Starting Code 
//LENGTH
//start a function to give the user password options, beginning with how long the password must be
function getUserOptions() {
  var lengthChosen = parseInt(
    prompt('How many characters would you want your password to have?')
  );

//Use If-statement to check if value is a number, if not, give an alert
if (isNaN(lengthChosen) === true) {
  alert('Please enter our desired password length as a number.');
  return;
}

//Use If-statement to check if value is between 8-128, if not, give an alert
if (lengthChosen < 8 || lengthChosen > 128) {
  aler ('Please provide a numer between 8 and 128.');
  return;
}

//Once all is corrected, continue to next set of questions
var UppercaseChosen = confirm ("Would you like to use uppercase letters in your password?");
var LowercaseChosen = confirm ("Would you like to use lowercase letters in your password?");
var NumericChosen = confirm ("Would you like to use numeric characters in your password?");
var SpecialChosen = confirm ("Would you like to use special characters in your password?");

//CONDITIONAL STATEMENT -> to check if at least one upper/lower/special/and numeric character is included the password
if (
  UppercaseChosen === false &&
  LowercaseChosen === false &&
  NumericChosen === false &&
  SpecialChosen === false
) {
  //alert to let user pick the character
  alert ('Please select at least one number, uppercase, lowercase or special character.');
  return;
}

//Build the user options
var UserOptions ={
  lengthChosen: lengthChosen,
  UppercaseChosen: UppercaseChosen,
  LowercaseChosen: LowercaseChosen,
  NumericChosen: NumericChosen,
  SpecialChosen: SpecialChosen,
};
//return the users options (input)
return UserOptions;
}

//Code to chose a random character from list using FUNCTION
function GetRandom (arr) {
  return Math.floor(Math.random() * arr.length);
}

//GENERATE PASSWORD
function GeneratePassword(){
  var UserOptions = getUserOptions();
  //To get characters for the password, slected "must have characters" list and selected "can have characters" list.
  var PasswordArray =[];
  var MustHaveCharacters =[];
  var CanHaveCharacters = [];

  if (UserOptions.UppercaseChosen) {
    //generate possible characters
    CanHaveCharacters = CanHaveCharacters.concat(upperCasedCharacters);
    //Must 1 uppercase letter
    MustHaveCharacters.push(GetRandom(upperCasedCharacters));
  }

  if (UserOptions.LowercaseChosen) {
    //generate possible characters
    CanHaveCharacters = CanHaveCharacters.concat(lowerCasedCharacters);
    //Must 1 lowercase letter
    MustHaveCharacters.push(GetRandom(lowerCasedCharacters));
  }

  if (UserOptions.NumericChosen) {
    //generate possible characters
    CanHaveCharacters = CanHaveCharacters.concat(numericCharacters);
    //Must 1 numeric character
    MustHaveCharacters.push(GetRandom(numericCharacters));
  }

  if (UserOptions.SpecialChosen) {
    //generate possible characters
    CanHaveCharacters = CanHaveCharacters.concat(specialCharacters);
    //Must 1 special character
    MustHaveCharacters.push(GetRandom(specialCharacters));
  }

  //create loop with lengthChosen, then add a random character to the passwordArray from the possible characters
  for (let currIndex = 0; currIndex < UserOptions.lengthChosen;currIndex++) {
    PasswordArray.push(CanHaveCharacters[GetRandom(CanHaveCharacters)]);
  }

  //loop "must haves" and replace a character in PasswordArray
  for (var i = 0; i < MustHaveCharacters.length; i++) {
    password[i] = MustHaveCharacters[i];
  }

  //JOIN METHOD -> passwordArray to string
  PasswordArray = PasswordArray.join("");
  return PasswordArray;

}

//Connect 'generate' element
var GenerateBtn = document.querySelector('#generate');

//write password to the #password input
function WritePassword() {
  var password = GeneratePassword();
  var PasswordText = document.querySelector('#password');

  PasswordText.value = password;
}

//EVENT LISTENER
GenerateBtn.addEventListener("click", WritePassword);