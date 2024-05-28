// define array of guest
let guestsList :string[] =["Samra","Aliza","alina"];

// invite guest for dinner
// for each method
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`)
    
}); 
                // Extra
// map()
// invite guest 
let invitation : string[] = guestsList.map(guest => `Dear ${guest}, you are cordially invited to dinner`)
console.log(invitation);

invitation.forEach(invite => {
    console.log(invite);
    
});