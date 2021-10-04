const user = {
    name: 'Pedro',
    lastName: 'Alexandre Pinto'
};

//recupera as cahves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user)); //name, lastname
//console.log((Object.keys(user)).length); tamanho do objeto

//recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user)); // pedro, alexandre pinto

//recupera um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user)); //[ [ 'name', 'Pedro' ], [ 'lastName', 'Alexandre Pinto' ] ]

//Mergear propriedades de objetos
//Object.assign(user, {fullName: 'Pedro Alexandre Pinto'});
Object.assign(user, {fullName: `${user.name} ${user.lastName}`});
console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26, cidade: 'Rio Grande'},'\n'));

//previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj); // congela o objeto não deixando que seja feita qualquer alteração.
console.log(newObj);

newObj.foo = 'changes';
console.log(newObj);
delete newObj.foo;
console.log(newObj);
newObj.bar = 'foo';
console.log(newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: "Pedro"};
Object.seal(person);

person.name = 'Pedro Pinto';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações: ', person)
