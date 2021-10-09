//criar | inserir e remover elementos | interar elementos | buscar elementos | ordenar elementos | transformar um array em outro tipo de dados.

// criar array
const arr = [1,2,3]; // [1,2,3]
const arr2 = new Array(1,2,3);// [1,2,3]
const persons1 = Array.of('Pedro', 'Arthur', 'Manu'); // ['Pedro', 'Arthur', 'Manu']
const numersAndStrings = Array.of(1,2,3,'Pedro', 'Arthur', 'Manu'); // [1,2,3,'Pedro', 'Arthur', 'Manu']
const arr4 = Array(3);// cria um array com 3 posições vazias
const arr5 = Array(3,2);// [3,2]

// utilizando array.from
//const divs = document.querySelectorAll('div'); // cria um array de parâmetro array-like ou iterrablw object
//const arr6 = Array.from(divs); // transforma o parametro em array deixando de ser um NodeList assim podendo receber comandos como pop..


// .push
// Adicionar um ou mais elementos no final do array
const frutas = ['melancia', 'banana'];
frutas.push('laranja'); // 3
frutas; // (3) ['melancia', 'banana','laranja']

// .pop
// Remove o último elemento de um array e retorna o elemento removido.
const frutas2 = ['melancia', 'banana','laranja'];
frutas2.pop(); // 'laranja'
frutas2;  // ['melancia', 'banana']

// .unshift
// Adiciona o elemento no inicio do array
const frutas3 = ['melancia', 'banana'];
frutas3.unshift('laranja'); // 3
frutas3; // ['laranja','melancia', 'banana']

// .shift
// Remove o primeiro elemento do array
const frutas4 = ['laranja','melancia', 'banana'];
frutas4.shift(); // 'laranja'
frutas4; // ['melancia', 'banana']

// .concat
// Concatena um ou mais arrays retornando um novo array
const mens = ['Pedro', 'Arthur'];
const womans = ['manu'];
const persons = mens.concat(womans);
persons; // [ 'Pedro', 'Arthur', 'manu' ]

// .slice
// Retorna um novo array "fatiando" o array de acordo com o ínicio e fim
const fatiando = [1,2,3,4,5];

const fatiado = fatiando.slice(0,2); // [1,2] ele retorna os valores colocador no novo array
console.log(fatiado);
console.log(fatiando); // não altera o array

fatiando.slice(2) // [3,4,5] - pega a partir da 2 posição do elemento
fatiando.slice(-1) // [5]  - pega a ultima posição dos elemento
fatiando.slice(-3) // [3,4,5] - pega as 3 ultimas posições do elemento

// .splice
// Altera um arraya adicionando novos elementos enquanto remove elementos antigos
const insertPosition = [1,2,3,4,5];

const remo = insertPosition.splice(2);
console.log(remo); // [3,4,5]
console.log(insertPosition); // [1,2]

insertPosition.splice(0, 0, 'pedro'); // [] - (elemento onde será modificado, quantos itens serão removidos, o que será adicionado )
console.log(insertPosition);
insertPosition.splice(1,2,'Arthur', 'manu');
console.log(insertPosition);
















