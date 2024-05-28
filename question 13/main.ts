// array
let transportationMode:string[] =["car","bicycle","aeroplane","bus"];

// loop
for(let i=0; i<transportationMode.length; i++){
    console.log(`I would like to own a ${transportationMode[i]}`);
};

// for each
transportationMode.forEach(mode => {
    console.log(`I would like to own a ${mode}`);
});
