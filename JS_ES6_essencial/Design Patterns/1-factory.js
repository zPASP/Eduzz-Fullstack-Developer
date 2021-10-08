// Todas as funções que retornam um objeto sem a necessidade de chamá-las com o NEW, são consideradas funções Factory (fábrica).

function Pessoa() {
    return {
        name: 'Pedro',
        lastName: 'Pinto'
    }
}

const p = Pessoa();
console.log(p)

/////// 

function Pessoa1(name) {
    return {
        name,
        lastName: 'Pinto'
    }
}

const p1 = Pessoa1('Pedro0');
console.log(p1)

/////////

function Pessoa2(customProperties) {
    return {
        name: 'Arthur',
        lastName: 'Pinto',
        ...customProperties
    }
}

const p2 = Pessoa2({name: 'Pedr0', age: 25});
console.log(p2)