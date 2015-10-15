//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

cool = doSomethingCool();
// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);
sayHi();

// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------
//z and then y because the y is supposed to be logged after 1s

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

var reverse = function(str){

  var arr;
  arr = ((str.split("")).reverse()).join("");
  return arr;
}
// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

var spanishColor = {
  "rojo" : "#ff0000",
  "blanco" :   "#ffffff",
  "azul" : "#0000ff",
  "verde": "#00ff00",
  "negro": "#000000"

}

// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";
var foo;
foo = "bar";

// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  for(var i = 0; i < 10; i++) {
    console.log(callback);
  }
};
var callNtimes = function(num){
    for(var i = 0; i < num; i++){
      console.log(num);
    }
}

// Put your answer below -------------------------



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};



var game = (function(){
  var score = 0;

  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;
  };

});
// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  var sum = numberA + numberB;
  console.log(sum);
};

var twoPlusTwo = addNumbers(2,2);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};


// Put your answer below -------------------------
//it is NaN because 0 + Null equals NaN

var speed = 0;

var accelerate = function(amount) {
  if(amount == Null)amount = 1;
  else speed += amount;

};



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};






// Put your answer below -------------------------

// -----------------------------------------------




//////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x,y){
    "use strict";
    if(x > y)return x;
    else if (y > x) return y;
    else return "equal"
}
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    "use strict";
    var array = [x,y,z];
    var largest = 0;
    for(var i = 0; i < 2; i++){
        if(array[i]>array[i+1]){
          largest = array[i];
        }
        else largest = array[i+1];
    }
    return largest;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    switch (char) {
      case 'a': return true;
        break;
      case 'e': return true;
      break;
      case 'i': return true;
      break;
      case 'o': return true;
      break;
      case 'u': return true;
      break;
      default: return false;

    }
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var word = "";
    for (var i = 0; i < phrase.length; i++) {
    word = word + phrase[i] + phrase[i]+ 'o';
    }
    return word;
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
    "use strict";
    //...
}

function multiply(){
    "use strict";
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total *= array[i];
    }
    return total;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
   var backwards;
    for (var i = str.length; i < 0; i++) {
      backwards = "the word is "+ backwards + array[i];
    }
    "use strict";
    //...
    return backwards;
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var largest = "";
    for (var i = 0; i < ((words.length)-1); i++) {
          if(words[i].length() > words[i+1].length()){
            words[i] = largest;
          }
        }
          return largest;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var array = [];
    var order = 0;
    for (var i = 0; i < words.length; i++) {
      if( words[i] > i){
          array[order] = words[i];
          order++;
      }
    }
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var myMap = new Map();
    for (var i = 0; i < string.length; i++) {
      if(myMap.get(string[i]) == undefined){
        myMap.set(string[i],1);
      }
      else{
        var value = myMap.get(string[i]);
        myMap.set(string[i],value +1)
      }
    }
    "use strict";
    //...
    return myMap;
}