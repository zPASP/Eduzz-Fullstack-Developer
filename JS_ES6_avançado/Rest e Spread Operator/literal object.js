const obj = {
    nome: 'Pedro',
    sobrenome: 'Pinto'
};

let obj2 = {
    ...obj,
    fullName: obj.nome + " " + obj.sobrenome,
    full: `${obj.nome} ${obj.sobrenome}`,
    nome: 'Arthur'
};

console.log(obj2);