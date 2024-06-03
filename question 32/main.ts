// question 32

let current_user =["AlisHa","Safia","aqsa","uzma","Tayyaba"];

let new_user =["Areeba","Aliza","Safia","Romina","Tayyaba"];

new_user.forEach(newOne => {
    let our_condition = current_user.some(current_one_user =>current_one_user.toLowerCase() === newOne.toLowerCase());
    if(our_condition){
        console.log(`sorry ${newOne} is already taken`)
    } else{
        console.log(`${newOne} is available`)
    }
    
});