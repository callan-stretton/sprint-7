// Minimum

function min (number1, number2) {
    return Math.min(number1, number2);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

////////////////////////////////////////////////////////////////////////////////

// Recursion

var isEven = function (number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number -2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? (RangeError: Maximum call stack size exceeded)

//To fix this add another if statement that adds 2 if the number is less than 0 like so:
var isEven = function (number) {
  if (number === 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number < 0) {
      return isEven(number + 2);
  } else {
      return isEven(number -2);
  }
}

////////////////////////////////////////////////////////////////////////////////

// Bean counting

function countBs (string) {
    var bCount = 0;
    for (var i = 0; i < string.length; i++) {
        if(string.charAt(i) === "b" || string.charAt(i) === "B") {
            bCount ++;
        }
    }
    return bCount;
}

function countChar (string, character) {
    var charCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            charCount ++;
        }
    }
    return charCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
