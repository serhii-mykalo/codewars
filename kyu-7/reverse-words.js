// * Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// -----------------------------------

function reverseWords(str) {
   return str
      .split(" ")
      .map(function (word) {
         return word.split("").reverse().join("");
      })
      .join(" ");
}

// -----------------------------------

function reverseWords(str) {
   // Go for it
   //split words into seperate arrays
   return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// -----------------------------------

function reverseWords(str) {
   return str
      .split(" ")
      .map((str) => str.split("").reverse().join(""))
      .join(" ");
}

// -----------------------------------

function reverseWords(str) {
   return str
      .split(" ")
      .reduce((array, word) => [...array, [...word].reverse().join("")], [])
      .join(" ");
}
