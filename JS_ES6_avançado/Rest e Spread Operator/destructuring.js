const company = {
    name: 'SOCORRO TÉCNICO',
    address: 'Rua do nada',
    employees: ['pedro', 'arthur'],
    products: {
        shirts: {
            colors: [ 'red', 'green', 'blue']
        },
        socks : {
            colors: [ 'cyan' , 'magenta', 'yellow']
        }
    }
};

// mostrar no nome da empresa com destructuring

const {name} = company
console.log(name); // Socorro Técnico


// Nome da variavel com nome diferente da propriedade do objeto
const {name: companyName } = company
console.log(companyName); // Socorro Técnico

// Valor da propriedade vazio.
const employeesNumber = ({employees}) => employees.length === 0 ? 'Uninformed':employees;
console.log(employeesNumber(company));

// Propriedade não declarada.
const {products: {shirts: {size: shirtsSizes = 'Uninformed'}}} = company
console.log(shirtsSizes)

// outro exemplo utilizando o atributo de um objeto
const totalColorShirts = ({products: {shirts: {colors: {length}}}}) => length;
console.log(totalColorShirts(company));

// utilizando com array

arr = [1,2,3,4,5];
function sum ([a, b] = [1,1]) {
    return a + b;
}
console.log(sum(arr)); //3
console.log(sum()); //2
