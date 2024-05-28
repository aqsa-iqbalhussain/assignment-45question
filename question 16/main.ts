// question 16 

let guestslist :string[] = ["aliza","aqsa","nimra"];

console.log("Great News! we found bigger dinner table");

// unshift

guestslist.unshift("ahmed");

console.log(guestslist);

// splice

guestslist.splice(Math.floor(guestslist.length/2),0,"Safia");

// push

guestslist.push("ali");

console.log(guestslist);

// for each
guestslist.forEach(guest => {
    console.log(` Dear ${guest}, you are cordially invited to dinner!`);
    
});



