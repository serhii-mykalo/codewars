// * You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// --------------------------

const check = (a, x) => a.includes(x);

// --------------------------

function check(a, x) {
   return a.includes(x);
}

// --------------------------

function check(a, x) {
   return a.indexOf(x) > -1 ? true : false;
}

// --------------------------

function check(a, x) {
   console.log(x);
   console.log(a);
   let result = true;

   if (!a.includes(x)) {
      result = false;
   }
   return result;
}
