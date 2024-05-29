// question 18
var placeToVisit = ["Turkey", "Dubai", "Saudi Arabia", "California", "Hunza"];
// print in original order
console.log("Original Order :", placeToVisit);
//print array in alphabetical order without modifying actual list
console.log("Alphabetical Order :", placeToVisit.slice().sort());
// print in original order
console.log("Original Order :", placeToVisit);
// print array in reverse  alphabetical order without modifying actual list
console.log("Reverse Alphabetical Order :", placeToVisit.slice().sort().reverse());
// print array  in original order again
console.log("Original Order :", placeToVisit);
// reverse the order of of list .print the array to show that its orer has changed.
placeToVisit.reverse();
console.log("Reverse Order :", placeToVisit);
// reverse the order of your list again.print the list to show its back oits original order.
placeToVisit.reverse();
console.log("Original Order :", placeToVisit);
// sort your array so its stored in alphabetical order print the array to show that its order has been changed
placeToVisit.sort();
console.log("Alphabetical Order :", placeToVisit);
// sort to change your array so its stored in alphabetical order print the array to show that its order has been changed
placeToVisit.reverse();
console.log(" Reverse Alphabetical Order :", placeToVisit);
