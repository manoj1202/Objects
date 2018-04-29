// challenge 
let name = ' steve '

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = 'askdnlnpassword';
console.log(password.includes('password'))

console.log(name.trim());

let isValidPassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true;
    } else {
        return false;
    }
}

//or 
/*let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password');
}
*/
console.log(isValidPassword('hbfbh3'))
console.log(isValidPassword('afh38983enedwiu'))
console.log(isValidPassword('bfhb3wir7password'))