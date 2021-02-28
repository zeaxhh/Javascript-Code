/* this project contains an object with several methods that perform various 
different math operations */

const mathLibrary = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a,b){
      return a * b;
  },
  divide(a,b){
      return a/b;
  },
  factorial(num){
      let i = 0;
      let factorial = 1;
      do {
          i++;
          factorial *= i;
      } while (i < num)
      return factorial;
  },
};

console.log(mathLibrary.factorial(10));
