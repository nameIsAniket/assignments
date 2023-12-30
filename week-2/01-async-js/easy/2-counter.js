// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter(counterTime){
    let p = new Promise(function(resolve){
        setTimeout(() => {resolve()}, 1000);
    })
    return p;

}

async function main(){
    let countdown = 5;
    for(let i=0; i<countdown; i++){
        console.log(i+1);
        let time = await counter();
    }
}

main()