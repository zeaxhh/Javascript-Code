// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};



// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//MY CODE BEGINS HERE
//factory function for returning pAequor Objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // mutates one random base in the instances DNA
    mutate() {
      const index = Math.floor(Math.random() * 15);
      const base = dna[index];
      let rand = returnRandBase();
      while (base === rand) rand = returnRandBase();
      dna[index] = rand;
    },
    //compares 2 instances of pAequor and logs the percentage dna shared
    compareDNA(pa2) {
      let count = 0;
      pa2.dna.forEach((curval, index) => {
        if (curval === dna[index]) count++;
      });
      count = (count / 15) * 100;
      console.log(
        `Specimen number ${specimenNum} and Specimen number ${
          pa2.specimenNum
        } have ${count.toFixed(1)}% DNA in common`
      );
    },
    // returns boolean if 'C' and 'G' bases are over/ under 60%
    willLikelySurvive() {
      let count = 0;
      dna.forEach((curval) => {
        if (curval === "C" || curval === "G") {
          count++;
        }
      });
      return count / 15 >= 0.6;
    },
  };
};

// creates multiple instances of pAequor that evaluate to true through .willLikelySurvive()
let create = num =>{
  let array = [];
  let i = 0;
  while (array.length < num) {
    let temp = pAequorFactory(i, mockUpStrand());
    if(temp.willLikelySurvive() == true){
      array.push(temp);
      i++;
    }
  }
  return array;
};

// tests various functions 

//let newDna = pAequorFactory(1, mockUpStrand());
//console.log(create(30));
//let newDna2 = pAequorFactory(2, mockUpStrand());
//newDna.compareDNA(newDna2)
//console.log(newDna.willLikelySurvive())
