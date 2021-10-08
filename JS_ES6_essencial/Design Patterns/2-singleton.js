// O objetivo desse pattern é criar uma única instância de uma função contrutora e retorná-la toda vez
// quer for necessário utilizá-la.

function Pessoa () {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Pedro'});
const p2 = Pessoa.call({ name: 'Custon Name'});

console.log(p);
console.log(p2);

//ou seja sempre retorna a mesma instância