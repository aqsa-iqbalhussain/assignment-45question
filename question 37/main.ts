// question 37
function make_shirt(size: string = "large",printMessage: string="I Love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)

}

make_shirt();

//calling a function now medium size
make_shirt("medium");

// calling a function now  shirt of any size with a different message.
make_shirt("small","I Love Html");
