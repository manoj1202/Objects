// challenge

let convert = function(fahrenheit){
    return {
        fahrenheit : fahrenheit,
        kelvin : (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = convert(32);
console.log(temp);