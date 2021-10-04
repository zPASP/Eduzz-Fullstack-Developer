//retorna o tamano de uma string
const textSize = "pedro".length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = "pedro".split('d');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//busca por um valor e substitui por outro
const replaceText = 'Pedro'.replace('Pedro', 'Ordep');
console.log(`\nSubstituição de valor: ${replaceText}`);

//retorna a "fatia de um valor"
const lastChar = 'Pedro'.slice(-1);
console.log(`\nÚltima letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'Pedro'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: ${allWithoutLastChar}`);

const secontToEnd = 'Pedro'.slice(1);
console.log(`\nValor da string da segunda letra até a última: ${secontToEnd}`);

//Retorna N caracteres a partir da posição
const twoCharsBeforeFirstPos = 'Pedro'.substr(0,2);
console.log(`\nAs duas letras primeiras letras são: ${twoCharsBeforeFirstPos}`)
