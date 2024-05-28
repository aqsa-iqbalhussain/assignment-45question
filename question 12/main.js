"use strict";
let names = ["Ayesha", "Safia", "Alisha", "Samra", "Mehwish"];
// loop
//for each
//for of loop
// loop
for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! how are you?`);
}
;
// for each
names.forEach(name => {
    console.log(`hi ${name}! how are you?`);
});
// for of loop
for (let friendName of names) {
    console.log(`Dear ${friendName}! how are you?`);
}
