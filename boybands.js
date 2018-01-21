let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");
console.log(bandElement);

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");
console.log(veggieElement);

// Execute a for loop that will iterate over the arrays
// their example for executing a loop: 
// for (let loopTracker = 0; loopTracker < ???; loopTracker += 1) {

for (let looptracker = 0; looptracker < bands.length; looptracker += 1) { // i had bandElement instead of bands -- mistake
    // there's nothing to log cuz loop isn't executing yet so don't write this yet:
    // console.log(bandElement.length);


    // Get a reference to the current item in the bands array
    const currentBand = bands[looptracker];
    console.log(currentBand);

    // Update the innerHTML value of the DOM element for bands
    // document.getElementById("boy-bands").innerHTML = currentBand
    // more concise would be:
    bandElement.innerHTML += currentBand;

    // Get a reference to the current item in the vegetables array
    const currentVeggie = vegetables[looptracker];

    // Update the innerHTML value of the DOM element for vegetables

    // document.getElementById("vegetables").innerHTML = currentVeggie; // it found the innerHTML was vacant and set it to currentVeggie
    // more concise would be:
    veggieElement.innerHTML += currentVeggie;

}

  // ultimate goal:
  // Update the code to iterate the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p, etc...)