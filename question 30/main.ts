// questions 30

let userNames:string[] = ["Safia","Alisha","Ayesha","Fatima","Admin"]

userNames.forEach(name => {
    if(name === "Admin"){
        console.log(`Hello ${name}, would you like to see a status report?`)
    } else{
        console.log(`Hello ${name}, thank you for logging in again.`)
    }
      
});