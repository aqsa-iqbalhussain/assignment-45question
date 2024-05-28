// question 16 
var guestslist = ["aliza", "aqsa", "nimra"];
console.log("Great News! we found bigger dinner table");
// unshift
guestslist.unshift("ahmed");
console.log(guestslist);
// splice
guestslist.splice(Math.floor(guestslist.length / 2), 0, "Safia");
// push
guestslist.push("ali");
console.log(guestslist);
// for each
guestslist.forEach(function (guest) {
    console.log(" Dear ".concat(guest, ", you are cordially invited to dinner!"));
});
