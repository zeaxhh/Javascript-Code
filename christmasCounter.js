//Write a function that calculates and outputs the number of days until Christmas 

const christmasCounter = () => {
    const today = new Date();

    var christmas = new Date(today.getFullYear(), 12 - 1, 25);

    console.log(`There are ${Math.floor((christmas - today) / 86400000)} days until Christmas`);
};




christmasCounter();
