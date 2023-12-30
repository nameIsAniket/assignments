// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

const { ifError } = require("assert");
const fs = require("fs");
const filePath = "cleanMe.txt";

fs.readFile(filePath,"utf-8",function(error,fileData){
    if (error){console.log(error)};
    regExp = /\s+/g; //find the spaces one or more in string 
    fileDataWithoutSpaces = fileData.replace(regExp," ").trim(); //using regExp to find the spaces one or more and replace with the single space and trim got the case where we need to cut the spaces from the front and back

    fs.writeFile(filePath,fileDataWithoutSpaces,function(error){
        if (error){console.log(error)}
        console.log("file update without spaces in file data");
    })
})