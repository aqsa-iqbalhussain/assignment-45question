// question 24
// Tests for equality and inequality with strings

const string1 :string = "hello"
const string2 :string = "world"

console.log(string1 == string2);  //false

console.log(string1 != string2);  //true

// • Tests using the lower case function
const upperCase :string = "HELLO"
const lowerCase :string = "hello"

console.log(upperCase.toLowerCase() == lowerCase.toLowerCase());  //true

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1 :number = 10
const num2 :number = 20

console.log(num1 == num2);  //false
console.log(num1 != num2);  //true

console.log(num1 > num2);  //false

console.log(num1 < num2);  //true

console.log(num1 >= num2);  //false

console.log(num1 <= num2);  //true

//• Tests using "and" and "or" operators

const x :number = 10;
const y :number = 20;
const z :number = 30;

console.log( x < y  &&  y < z ); //true
console.log( x > y  ||  y < z ); //true

// Test whether an item is in a array

const array :number[] = [1, 2, 3, 4, 5];
const itemToFind :number= 3;
console.log(array.indexOf(itemToFind) !== -1); //true

//• Test whether an item is not in a array

const array1 :number[] = [1, 2, 3, 4, 5];
const itemToFinds :number= 6;
console.log(array1.indexOf(itemToFinds) === -1); //true

//• Test whether a string is in a array
