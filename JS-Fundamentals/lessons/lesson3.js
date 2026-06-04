// Logical Operators
// && (AND), || (OR), ! (NOT)

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true

// Short-circuit evaluation
let c = a && b; // false, because a is true but b is false
let d = a || b; // true, because a is true

console.log(c); // false
console.log(d); // true

// Combining logical operators
let e = (a && b) || (a && !b); // true, because a is true and !b is true
console.log(e); // true

let ageIsMoreThan18 = true;
let hasParentalConsent = false;

let canAttendParty = ageIsMoreThan18 || hasParentalConsent; // true, because ageIsMoreThan18 is true
console.log(canAttendParty); // true 