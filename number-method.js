let num = 1045.5411;

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
// rondom number generating
let min = 0;
let max =  200;
let random = Math.floor(Math.random()*(max -min) + min);
console.log(random);

//challenge
let makeGuess = functoion(num1){
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random()*(max-min+1));
    if(num1 === random){
        return trur;
    } else {
        return false;
    }
}

console.log(makeGuess(1));