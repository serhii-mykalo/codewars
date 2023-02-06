// * Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// --------------------------------------------

function accum(s) {
   return s
      .split("")
      .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
      .join("-");
}

// --------------------------------------------

function accum(s) {
   return s
      .split("")
      .map(
         (x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())
      )
      .join("-");
}

// --------------------------------------------

function accum(str) {
   var letters = str.split("");
   var result = [];
   for (var i = 0; i < letters.length; i++) {
      result.push(
         letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
      );
   }
   return result.join("-");
}

// --------------------------------------------
// Залитий код

function accum(s) {
   const str = s.split("");
   let array = [];

   for (let e = 0; e < str.length; e += 1) {
      array.push(word(str[e], e));
   }

   const newArr = array.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
   );

   return newArr.join("-");
}

const word = (element, index) => {
   let prob = [];

   for (let i = 0; i < index + 1; i += 1) {
      prob.push(element);
   }

   return prob.join("");
};

// --------------------------------------------
// Процес написання

const stringer = function accum(s) {
   const str = s.split("");
   console.log(str);
   let array = [];
   for (let e = 0; e < str.length; e += 1) {
      console.log(str[e]);
      array.push(word(str[e], e));
   }
   console.log(array);

   const newArr = array.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
   );
   console.log(newArr);

   return newArr.join("-");
};

const word = (element, index) => {
   let prob = [];
   console.log(typeof element);
   console.log(typeof index);
   for (let i = 0; i < index + 1; i += 1) {
      prob.push(element);
   }
   console.log(prob);
   return prob.join("");
};

// console.log(word("r", 2));

console.log(stringer("ZpglnRxqenU"));
