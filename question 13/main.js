// array
var transportationMode = ["car", "bicycle", "aeroplane", "bus"];
// loop
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a".concat(transportationMode[i]));
}
;
// for each
transportationMode.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode));
});
