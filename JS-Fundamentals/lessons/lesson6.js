// Functions
// A function is a reusable block of code that performs a specific task. It can take inputs (parameters) and return an output (result). Functions help to organize code, make it more readable, and allow for code reuse.

// Function Syntax
// A function can be defined using the function keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.

// Example of a simple function:
function sayHello() {
    console.log("Hello, World!");
}

// Calling the function
sayHello(); // Output: Hello, World!

// Functions with Parameters
// Functions can take parameters, which are placeholders for values that will be passed to the function when it is called.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!

// Functions with Return Values
// Functions can also return a value using the return keyword.

function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum); // Output: 8

// Function Declaration vs Function Expression
// There are two common ways to define functions in JavaScript: function declarations and function expressions.

// Function Declaration
// A function declaration defines a named function. It is hoisted, meaning it can be called before it is defined in the code.

// Anonymous Function Expression
// An anonymous function expression defines a function without a name. It is often used as an argument to other functions or assigned to a variable. Like named function expressions, it is not hoisted.

// Example of both:

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Bob")); // Output: Hello, Bob!

// Anonymous Function Expression
const greetAnonymous = function(name) {
    return `Hello, ${name}!`;
}; 

console.log(greetAnonymous("Charlie")); // Output: Hello, Charlie!

// Arrow Functions      
// Arrow functions are a more concise syntax for writing function expressions. They are often used for short functions and do not have their own this context.  
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

console.log(greetArrow("Dave")); // Output: Hello, Dave!

// For even shorter functions, if the function body is a single expression, you can omit the curly braces and the return keyword:
const greetShort = name => `Hello, ${name}!`;

console.log(greetShort("Eve")); // Output: Hello, Eve!