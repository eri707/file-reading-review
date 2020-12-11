// install fs module
const fs = require('fs');
// read in the file 
fs.readFile('./cars.json', (err, data) => {
    // early return if no file name doesn't exist
    if (err) return console.log('Invalid file name');
    let cars = JSON.parse(data);
    // create an empty object to put key and value in 
    let carHash = {};
    cars.forEach(element => {
        // if key exists, increment
        if (carHash[element.make]) {
            carHash[element.make]++;
        } else { // otherwise assign initial value
            carHash[element.make] = 1;
        }
    });
    // change the object into an array and print it to console
    Object.entries(carHash).forEach(([key, value]) => console.log(`${key}: ${value}`));
});