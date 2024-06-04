// question 41

//Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames :string[] = ["Harry Potter","Hermione Granger","Ron weasley","Albus Dumbledore"];

function show_magicians(magicianNames:string[]){
    magicianNames.forEach(name => {
        console.log(name);
        
    });
    }

show_magicians(magicianNames);
