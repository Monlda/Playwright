// Class and Methods

// Class is a blueprint for creating objects. It defines properties and methods that the objects created from the class will have.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// In this example, we defined a class called Person with a constructor that initializes the name and age properties. We also defined a method called greet that prints a greeting message to the console. We then created an instance of the Person class and called the greet method on that instance.