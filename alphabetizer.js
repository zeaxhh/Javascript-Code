/* Write a function that takes an array of strings as parameter and sorts each string in the
array alphabetically.  if i pass ["acb", "bed","azn"] the func should return 
["abc","bde","anz"] */

const alphabetizer = (array) => {
  let order = [];
  for (let i = 0; i < array.length; i++) {
    order.push(array[i].toString().split("").sort().join(""));
  }
  console.log([order]);
};

alphabetizer(["acb", "bed", "azn"]);
