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
