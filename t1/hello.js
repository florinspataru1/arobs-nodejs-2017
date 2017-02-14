var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

var myFunc = function () {

};

var myObj = {
    "prop1": "val1",
    "prop2": "val2",
    "prop3": "val3"
};

Object.keys(myObj).forEach(function (item, key) {
    console.log("Item: ", myObj[item], " - key: ", item);
});


var myArray = [1, 4, 7, 9];
myArray.forEach(function (item, key) {
    console.log("Item: ", item, " - key: ", key);
});


fs.writeFile('myFile.txt', 'new data 2222', function (err) {
    if(err) {
        console.log("Error1", Object.keys(err), err);
    } else {
        console.log("Finished file writing");
    }
});

console.log("After writing to file");

console.log("Before using Promise");

fs.writeFileAsync('async/File.txt', 'data in async file').then(function (success) {
    console.log("Finished file async writing", success);
    return 'is ok'
}).catch(function (err) {
    console.log("Error2", Object.keys(err), err);
    return 'is not so great';
}).then(function (success) {
    console.log("Second then:", success);
});

console.log("After using Promise");