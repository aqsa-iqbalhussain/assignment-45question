// define array of guest
var guestsList = ["Samra", "Aliza", "alina"];
// invite guest for dinner
// for each method
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
// Extra
// map()
// invite guest 
var invitation = guestsList.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
console.log(invitation);
invitation.forEach(function (invite) {
    console.log(invite);
});
