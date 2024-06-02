"use strict";
// question 31
let userName = ["Ayesha", "Safia", "Aliza", "Admin", "Alisha"];
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users!");
}
else {
    userName.forEach(name => {
        if (name === "Admin") {
            console.log(`Hello ${name}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${name}, thank you for logging in again.`);
        }
    });
}
