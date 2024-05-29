// question 17
// list of guests

import { log } from "console";

let guestslist :string[] =  ["ahmed","aliza","safia","aqsa","nimra","ali"];

// print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only two guest" )

// remove guest from the list 
// pop

while(guestslist.length > 2){
    let removeGuest : string | undefined = guestslist.pop();
    if (removeGuest !== undefined){
        console.log(` Sorry, ${removeGuest} we can't invite you`);
    }

};

// print the message those people which are invite for dinner
guestslist.forEach(guest => {
 console.log(`${guest} you are invited for dinner`);   
});

// empty array

// pop
guestslist.pop();
guestslist.pop();

console.log("Updated list :" ,guestslist);
