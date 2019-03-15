function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }


function reverseString(string) {
    return (string.length > 1) ? reverseString(string.substring(1)) + string.charAt(0) : string;
}

function isPalindrome(word) {
 if (word.length < 2) {
     return true;
 }

 if (word[0] != word.slice(-1)) {
     return false;
 } else {
     return isPalindrome(word.slice(1, -1));
 }
}

function addUpTo(array, index) {
    return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
    return array.length === 1 ? array[0] : Math.max(array.shift(), maxOf(array));
}

function includesNumber(array, n) {
    return array.length > 1 ? (!array.includes(n) ? false : includesNumber(array.slice(1), n)) : true;
}