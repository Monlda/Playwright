//Hello world
console.log("Hello world!");

//Variables
let name = "John";
const age = 30;
var city = "New York";
console.log(name, age, city);

var weight, dateOfBirth, sex; //Multiple variables declaration
weight = 70; //Assigning value to variable
dateOfBirth = "01/01/1995";
sex = "Male";
console.log(weight, dateOfBirth, sex);

//Constants
const PI = 3.14;
console.log(PI);

//Data types 
let isStudent = true; //Boolean
let score = 95; //Number
let firstName = "Alice"; //String
let lastName = null; //Null
let address; //Undefined
let hobbies = ["reading", "traveling", "coding"]; //Array
let person = { name: "Bob", age: 28 }; //Object
console.log(isStudent, score, firstName, lastName, address, hobbies, person);

//objects
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
console.log(car.color); //Accessing object property using dot notation
//or
console.log(car["color"]); //Accessing object property using bracket notation
car.year = 2021; //Modifying object property
console.log(car.year);

//Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); //Accessing array element
fruits.push("grape"); //Adding element to array
console.log(fruits);
fruits.pop(); //Removing last element from array
console.log(fruits);
fruits.unshift("kiwi"); //Adding element to the beginning of the array
console.log(fruits);
fruits.shift(); //Removing first element from the array
console.log(fruits); 