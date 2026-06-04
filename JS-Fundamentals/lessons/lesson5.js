// Loops

// A loop is a programming construct that allows you to repeat a block of code multiple times.
// There are several types of loops in JavaScript:

// for loop
// for(initialization; condition; increment/decrement) {
//     // Code to execute in each iteration
// }

// Example: Print numbers from 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log("Hello, world! " );
}

let fruits = ["apple", "banana", "orange"];
// Print each fruit in the array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop (ES6)
let cars = ["Toyota", "Honda", "Ford"];

for(let car of cars) {
    console.log(car)
    if(car === "Honda") {
        break; // Exit the loop if car is "Honda"
    } else if(car === "Toyota") {
        continue; // Skip the rest of the loop body and move to the next iteration if car is "Toyota"
    }
}

// for each loop (ES5)
const frutas = ['manzana', 'plátano', 'naranja'];

frutas.forEach((fruta) => {
  console.log(fruta);
});


// while(condition) {
//     // Code to execute as long as condition is true
// }

// Example: Print numbers from 1 to 5 using while loop
let j = 1;
while(j <= 5) {
    console.log("Hello, world! " );
    j++;
}

// do {
//     // Code to execute at least once and then repeat as long as condition is true
// } while(condition);

// Example: Print numbers from 1 to 5 using do-while loop
let k = 1;
do {
    console.log("Hello, world! " );
    k++;
} while(k <= 5);

// Looping through an array using while loop
let index = 0;
while(index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

