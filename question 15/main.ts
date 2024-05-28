let guestslist :string[] = ["aliza","samra","nimra"];

// print the name who cannot make dinner 

let unableAttend :string = guestslist.splice(1,1)[0];
console.log(`${unableAttend} not invited for dinner`);

// push
guestslist.push("Aqsa");

// print a message
guestslist.forEach(guest => {
    console.log(`Dear ${guest} you are cordially invited`)
    
});

