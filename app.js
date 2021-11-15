// Introduction to Javascript //
var nameFirst="Anthony";
var pizzaCount="2";
var isHungry= true;
var totalCost= pizzaCount * 12;

console.log(nameFirst);
console.log(pizzaCount);
console.log(isHungry);
console.log(totalCost);

alert("Picking up for "+ "" + nameFirst);
alert("The pizza cost "+ pizzaCount + " dollars.");
alert(nameFirst + " your total is "+ totalCost);
prompt("Are you hungry?");


//JS Variables
//Calculate my Age
var birthYear = 1998;
var futureYear  = 2040;
var age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//Convert F to C
var celsius = 60;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 15;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

//Function
function tellFortune(jobTitle, geographicLocation, partner, children) {
    var future = " You will be a "+ jobTitle + " in " +
    geographicLocation+ " and married to " + partner + " with " + children + " kids ";
    document.getElementById("demo").innerHTML=future;
    console.log(future)
}

    tellFortune('prostitute', 'Tijuana', 'Carmen Electra', 5);
    tellFortune('mafia boss', 'Pretoria', 'Lana Rhodes', 1);
    tellFortune('hitman', 'Tokyo', 'Mia Khalifa', 3);

//The Geometrizer

//Create 2 functions that calculate properties of a circle, using the definitions here.

//Create a function called calcCircumfrence:
function calcCircumfrence(radius) {
//Pass the radius to the function.
var y = (Math.PI * radius) * 2;
//Calculate the circumference based on the radius, and output "The circumference is NN".
console.log("The circumfrence is " + y + ".");
  }
//Create a function called calcArea:
function calcArea(radius) {

//Pass the radius to the function.
var x = (Math.PI * radius) * radius;
//Calculate the area based on the radius, and output "The area is NN".
console.log("The area is " + x + ".");
}

// Array //
//Create an Array called "donuts" that list 7-10 different items
var donuts=['glazed', 'jelly', 'chocolate', 'lime zest', 'lemon pie','sprinkled', 'toffee','cherry']
//1 Using a loop, iterate through this array and console.log all the donuts

//2 Write the command to remove the first donut fron the array
//3 Write the command to remove the last donuts from the array
//4 Write the command to add a new donut "lime zest" to the front of the array
//5 Write the command to add another donut "lemon pie" to the end of the array
//6 Use either the join() or toString() method to convert an array to a string.
//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
//8 Write the command that gives the indexOf where "chocolate" is located.
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
//10 **Using the splice method, remove one donut from the array and add another.
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.


//The Recipe Card
// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa*//






