
let count = 1
function countTillFive(){
    console.log(count);
    if (count == 5){
        clearInterval(interval);
    }
    count += 1;
}
const interval = setInterval(countTillFive,1000);