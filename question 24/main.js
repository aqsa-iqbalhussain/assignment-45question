// question 24
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log(string1 == string2); //false
console.log(string1 != string2); //true
// • Tests using the lower case function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() == lowerCase.toLowerCase()); //true
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log(num1 == num2); //false
console.log(num1 != num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//• Tests using "and" and "or" operators
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
// Test whether an item is in a array
var array = [1, 2, 3, 4, 5];
var itemToFind = 3;
console.log(array.indexOf(itemToFind) !== -1); //true
//• Test whether an item is not in a array
var array1 = [1, 2, 3, 4, 5];
var itemToFinds = 6;
console.log(array1.indexOf(itemToFinds) === -1); //true
//• Test whether a string is in a array
