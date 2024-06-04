"use strict";
// questions 42
//Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let magicianNames = ["Harry Potter", "Hermione Granger", "Ron weasley", "Albus Dumbledore"];
function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "the Great " + magicianNames[i];
    }
    ;
}
function show_magicians(magicianNames) {
    magicianNames.forEach(name => {
        console.log(name);
    });
}
make_great(magicianNames);
show_magicians(magicianNames);
