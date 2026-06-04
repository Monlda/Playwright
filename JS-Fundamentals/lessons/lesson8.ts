// Typescript vs JavaScript

// TypeScript is a superset of JavaScript that adds static typing and other features to the language. It is designed to help developers catch errors early and improve code quality. TypeScript code is transpiled to JavaScript, which can run in any environment that supports JavaScript.

// JavaScript, on the other hand, is a dynamic, interpreted language that is widely used for web development. It is a versatile language that can be used for both client-side and server-side development. JavaScript does not have built-in support for static typing, which can lead to runtime errors if not used carefully.

// In summary, TypeScript provides additional features and benefits over JavaScript, but it requires an extra step of transpilation. JavaScript is more flexible and widely supported, but it may require more careful coding to avoid errors. 

//Typescript helps you to protect data integrity by allowing you to define types for your variables, functions, and objects. This means that you can catch type-related errors at compile time, rather than at runtime. For example, if you try to assign a string value to a variable that is defined as a number, TypeScript will throw an error during compilation, preventing potential bugs in your code. Additionally, TypeScript's type system can help you to better understand the structure of your code and improve code readability.

// Example of TypeScript's type system:

let customerName: string = "John";
let customerLastName: string = "Smith";
let customerAge: number = 30;

type Customer = {
    name: string;
    lastName: string;
    age: number;
}

let customer: Customer = {
    name: "John",
    lastName: "Smith",
    age: 30
};

// In this example, we define a type called "Customer" that has three properties: name, lastName, and age. We then create a variable called "customer" that is of type "Customer" and assign it an object with the appropriate properties. If we try to assign a value of the wrong type to any of these properties, TypeScript will throw an error during compilation, helping us to catch potential bugs early on.   
