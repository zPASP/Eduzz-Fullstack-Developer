const users = ['Pedro', 'Arthur', 'Manu'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Pedro',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Arthur',
        age: 05,
        gender: gender.MAN
    },
    {
        name: 'Manu',
        age: 27,
        gender: gender.WOMAN
    }
]

//retorna a quantidade de itens de um array
console.log('Items:', persons.length);

//verifica se é um array
console.log('A variavel persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
})
//persons.forEach((person, index, arr) => {
//    console.log(`Nome: ${person.name}, index: ${index}`, arr.length);
//});
//**********************************/
//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log ('\nPessoas com a adição do course: ', personsWithCourse);
//console.log ('\nPessoas sem a adição do course: ', persons); //não funcionou

const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//juntanto operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par: ', totalEvenAges);
