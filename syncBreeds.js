const fs = require("fs");

const breedDetailsFromFile = function(breed, funcWhenThingsDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) funcWhenThingsDone(data);
  });

};

const printBreed = breedData => {
  console.log('Return Value: ', breedData)
};

breedDetailsFromFile("Bombay",printBreed);