// * Multiply

// This code does not execute properly. Try to figure out why.

// ------------------------

multiply = function (a, b) {
   return a * b;
};

// ------------------------

multiply = (a, b) => a * b;

// ------------------------

function multiply(a, b) {
   if (!a || !b || typeof a != "number" || typeof b != "number") {
      return 0;
   }
   return a * b;
}
