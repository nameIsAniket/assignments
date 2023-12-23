/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const date = new Date();
    const beforeSum = date.getTime();
    sum = 0
    for (let i=0; i < n; i++){ sum += 1}
    const date2 = new Date();
    const afterSum = date2.getTime()
    return afterSum-beforeSum;
}

console.log('Time to calculate the sum in millisecond from 0 to number provided =',calculateTime(10000000));