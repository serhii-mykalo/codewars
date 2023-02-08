// * Build Tower

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// --------------------------------------------

function towerBuilder(n) {
   return Array.from({ length: n }, function (v, k) {
      const spaces = " ".repeat(n - k - 1);
      return spaces + "*".repeat(k + k + 1) + spaces;
   });
}

// --------------------------------------------

function towerBuilder(nFloors) {
   var tower = [];
   for (var i = 0; i < nFloors; i++) {
      tower.push(
         " ".repeat(nFloors - i - 1) +
            "*".repeat(i * 2 + 1) +
            " ".repeat(nFloors - i - 1)
      );
   }
   return tower;
}

// --------------------------------------------

function towerBuilder(n) {
   return [...Array(n)].map(
      (_, i) =>
         " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
   );
}

// --------------------------------------------
// Процес написання

function towerBuilder(nFloors) {
   let arr = [];
   let str = "*";
   let result = [];
   for (let i = 0; i < nFloors * 2; i += 1) {
      console.log(i);
      str = "" + "*".repeat(i);

      console.log(str);

      if (str.length % 2 !== 0) {
         arr.push(str);
      }
   }

   if (arr.length <= 1) {
      return arr;
   } else {
      arr.reverse().forEach((el, index) => {
         el = " ".repeat(index) + el + " ".repeat(index);

         console.log(el);
         result.push(el);
      });

      console.log(...arr);
      return result.reverse();
   }
   console.log(arr);
}

console.log(towerBuilder(3));
