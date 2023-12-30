// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let interval2 = setInterval(() => {
    seconds += 1;
    let amOrPM = "AM";
    let modifiedhrs = hours;
    if (seconds > 60){
        minutes += 1;
        seconds = 1;
    }
    if(minutes > 60){
        hours += 1;
        minutes = 1;
    }
    if (hours > 24){
        hours = 1;
    }
    if (hours < 12){ amOrPM = "PM";}
    else {modifiedhrs = hours - 12;amOrPM = "AM"; }

    console.log(modifiedhrs,":",minutes,":",seconds," ",amOrPM); // for time format - - HH:MM::SS AM/PM
    //console.log(hours,":",minutes,":",seconds); // for time format - HH:MM::SS

}, 1000);

