const arr = ['pedro', 'arthur', 'manu'];
const arr2 = [1,2,3,[4,5,[7,8,[9,10]]]];
const arr3 = [1,2,3,4,5,6,7];
const arr4 = [1,3,3,4,5,2,3];
const students = [
    { name: 'Pedro', grade: 10},
    { name: 'Athur', grade: 7},
    { name: 'Manu', grade: 4},

]
// .forEach - para cada item dentro do array eu consigo fazer uma iteração
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

// .map - retorna um noco array, de mesmo tamanho, interando cada item de um array, não modifica o array target
const mapArray = arr.map((value, index) => `${index}: ${value} `);
console.log(`mapArray ${mapArray}`)

// .flat - retorna um novo array com todos os elementos de forma recursiva de acordo com a profundidade especificada (depth)
console.log(arr2.flat(2)); // remover os subs arrays até o nivel 2

// .flatMap - retorna um novo array assim como na map e executa um flat de profundidade 1
console.log(arr2.flatMap(value => [value *2 ]));

// .keys - retorna um array interator que contem as chaves para cada elemento do array
const keysInterator = arr.keys();
console.log(keysInterator.next());
console.log(keysInterator.next());
console.log(keysInterator.next());
console.log(keysInterator.next());

// .values - retorna um array interator que contém os valores para cada elemento do array
const valuesInterator = arr.values();
console.log(valuesInterator.next());
console.log(valuesInterator.next());
console.log(valuesInterator.next());
console.log(valuesInterator.next());

// .entries - retorna um array interator que contém os pares chave/valor para cada elemento do array
const entriesInterator = arr.entries();
console.log(entriesInterator.next());
console.log(entriesInterator.next());
console.log(entriesInterator.next());
console.log(entriesInterator.next());

// .find - retorna o primeira item de um array que satisfaz a condição
const findName = arr.find(value => value === 'pedro');
console.log(findName);

// .findIndex - retorna o indice do primeiro item de um array que satisfaz a condição
const findNameIndex = arr.findIndex(value => value === 'pedro');
console.log(findNameIndex);

// .filter - retorna um novo array com todos os elementos que satisfazem a condição
const arrFilter = arr3.filter(value => value > 5); // todos os valores que forem maiores que 5
console.log(arrFilter);

// .index.Of - retorna o primeiro índice em que um elemento pode ser encontrado no array
const firstIndexOfItem = arr4.indexOf(3);
console.log(firstIndexOfItem);

// .lastIndexOf - retorna o último indice em que um elemento pode ser entrado no array
const lastIndexOf = arr4.lastIndexOf(3);
console.log(lastIndexOf);

// .includes - retorna um booleano verificando se determinado elemento existe no array
const hasItemOne = arr.includes('pedro');
console.log(hasItemOne);
const hasItemTwo = arr.includes('adriana');
console.log(hasItemTwo);

// .some - retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const passStudent = students.some(student => student.grade >= 7); // verifico se algum estudante tem a nota maior que 7
// sendo possivel utilizar o .find e descobrir qual aluno é ou findIndex para dexcobrir o indice dele
console.log(passStudent);

// .every - retorna um booleano verificando se todos os itens de um array satisfazem a condição
const allEvenNumbers = arr4.every(value => value % 2 === 0 );
console.log(allEvenNumbers);

// .sort - Ordena os elementos de um array de acordo com a condição.
const orderStudents = students.sort((student, next) => student.grade - next.grade);
console.log (orderStudents);

// .reverse - interte os elementos de um array
console.log(arr.reverse());

// .join - junta todos os elementos de um array, separados por um delimitador e retorna uma string
console.log(arr.join('-'));

// .reduce - Retorna um novo tipo de dado interando cada posição de um array
const avarageStudents = students.reduce((avarageStudent, student) => avarageStudent += student.grade, 0) / students.length;
console.log(avarageStudents);


