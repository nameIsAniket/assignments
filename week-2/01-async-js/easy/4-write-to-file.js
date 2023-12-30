const fs = require("fs");

const filePath = "4-write-to-file.md";
let contentToAppend = "Something that is written from the 4-write-to-file.js";

fs.appendFile(filePath,contentToAppend,(error)=>{
    if (error){
        console.log("error found : ",error);
        return;
    }
    console.log("Content Appended to file Sucessfully")
})

