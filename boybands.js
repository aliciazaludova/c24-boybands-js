let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");
console.log(bandElement); // i've stored the location on the DOM

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");
console.log(veggieElement);

// Execute a for loop that will iterate over the arrays
// their example for executing a loop: 

for (let looptracker = 0; looptracker < bands.length; looptracker += 1) { // bands.length evaluates to a number. we can apply this to vegetables even though it says bands.length. not doing something TO the bands array but taking away the number 5.
    // there's nothing to log cuz loop isn't executing yet so don't write this yet:
    // console.log(bands.length);
    // Get a reference to the current item in the bands array
    const currentBand = bands[looptracker]; //mr loop is standing at the line of people (bands). 
    console.log(looptracker, currentBand);

    // Update the innerHTML value of the DOM element for bands
    // document.getElementById("boy-bands").innerHTML = currentBand
    // more concise would be:
    bandElement.innerHTML += " " + currentBand;

    // ***** experimenting:
    // bands.push("kriss kross");
    // okay, this broke it. counter in console left of "kriss kross kept incrementing. 

    // Get a reference to the current item in the vegetables array
    const currentVeggie = vegetables[looptracker];

    // Update the innerHTML value of the DOM element for vegetables

    // document.getElementById("vegetables").innerHTML = currentVeggie; // it found the innerHTML was vacant and set it to currentVeggie
    // more concise would be:
    veggieElement.innerHTML += " " + currentVeggie;
}
  // ultimate goal:
  // Update the code to iterate the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p, etc...)