let user = {
    name: 'Pedro'
};

//alterando a propriedade de um objeto
console.log(user);

user.name = 'outro nome 1';
console.log(user);

user['name'] = 'outro nome 2';
console.log(user)

const prop = 'name';
user[prop] = 'outro nome 3';
console.log(user);

//criando uma propriedade
user.lastname = "Alexandre Pinto";
console.log(user)

//deletando um propriedade
delete user.name;
console.log(user)
