var guestslist = ["aliza", "samra", "nimra"];
// print the name who cannot make dinner 
var unableAttend = guestslist.splice(1, 1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
// push
guestslist.push("Aqsa");
// print a message
guestslist.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are cordially invited"));
});
