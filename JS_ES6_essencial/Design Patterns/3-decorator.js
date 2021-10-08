// Uma função decarator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.
let loggedIn = false; // variavel de verificação


function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}


// usando arrow Function
cc = (va1,va2) => va1+va2;
console.log(cc(1,2));
//

console.log(callIfAuthenticated (() => sum(2,3)))
loggedIn = true;
console.log(callIfAuthenticated (() => sum(2,3)))
loggedIn = false;
console.log(callIfAuthenticated (() => sum(2,3)))