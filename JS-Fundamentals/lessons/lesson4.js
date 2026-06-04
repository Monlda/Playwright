// Conditional statement

if(Condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}

// Example:
// If hour between 6am and 12pm, greet "Good morning"
let hour = 10;

if(hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Hello!");
}

// If score is greater than or equal to 90, print "A"
// If score is greater than or equal to 80, print "B"
// If score is greater than or equal to 70, print "C"
// Otherwise, print "F"

let score = 85;

if(score >= 90) {
    console.log("A");
} else if(score >= 80) {
    console.log("B");
} else if(score >= 70) {
    console.log("C");
} else {
    console.log("F");
}