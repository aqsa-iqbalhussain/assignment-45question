// question 43

//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicianNames :string[] = ["Harry Potter","Hermione Granger","Ron weasley","Albus Dumbledore"];

function copyArray(arr :string[]){
    return [...arr]
}


function make_great(magicianNames:string[]){
    for (let i=0; i<magicianNames.length; i++){
        magicianNames[i] = "the Great " + magicianNames[i];
     
        
    };
}
function show_magicians(magicianNames:string[]){
    magicianNames.forEach(name => {
        console.log(name);
    });
}    
const copyMagicianArray =copyArray(magicianNames);  

make_great(copyMagicianArray);

console.log("\n\nthis is original array")
show_magicians(magicianNames);

console.log("\n\nthis is modified copy of array")
show_magicians(copyMagicianArray)
