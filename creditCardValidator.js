// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

//runs a single cc number and returns true or false using Luhn algorithism
const validateCred = (array) => {
  let temp1 = [...array.reverse()];
  let temp2 = [];
  let temp3 = [];
  let checkDigit = temp1.pop();

  for (let i = 0; i < temp1.length; i++) {
    i % 2 == 0 ? temp2.push(temp1[i] * 2) : temp2.push(temp1[i]);
  }
  for (let i = 0; i < temp2.length; i++) {
    temp2[i] > 9 ? temp3.push(temp2[i] - 9) : temp3.push(temp2[i]);
  }
  const sum = temp3.reduce((acc, currVal) => acc + currVal);
  return (sum + checkDigit) % 10 === 0 ? true : false;
};

//Runs a batch of credit cards and returns an array of invalid numbers
const invalidCards = (array) => {
  let invalid = [];
  for (let i = 0; i < array.length; i++) {
    if (validateCred(array[i]) === false) {
      invalid.push(array[i]);
    }
  }
  return invalid;
};

//Runs bad batch of cc from invalidCards function and returns companies that are issuing bad cards in an array
const idInvalidCardCompanies = (array) => {
  let companies = [];
  array.forEach((arr) => {
    let first = [arr.shift()];
    for (let i = 0; i < first.length; i++) {
      if (first[i] === 3) {
        companies.push("Amex");
      } else if (first[i] === 4) {
        companies.push("Visa");
      } else if (first[i] === 5) {
        companies.push("Mastercard");
      } else if (first[i] === 6) {
        companies.push("Discover");
      } else {
        companies.push("Company Not Found");
      }
    }
  });
  let companyList = companies.filter(
    (val, index) => companies.indexOf(val) === index
  );
  return companyList;
};

//Uncomment to test functions :D
console.log(validateCred(mystery1));
console.log(invalidCards(batch));
console.log(idInvalidCardCompanies(invalidCards(batch)));
