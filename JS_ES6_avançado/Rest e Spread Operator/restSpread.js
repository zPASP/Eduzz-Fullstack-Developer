function sum (...args) { //rest
    return args.reduce((acc, value) => acc + value, 0);
}

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

function numbers (...args) {
	return (` Soma dos numeros: ${sum(...args)}
    Multiplicação dos numeros: ${multiply(...args)} `);//spread (enviando todos os itens do array
};

console.log(numbers(5,5,5,5));

const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function LogArgs (...args) {
    console.log(args);
}

const arr2 = [...arr, 5, 6, 7];

LogArgs(...str); 
// ['D', 'i', 'g', 'i', 't', 'a', 'l', ' ', 'I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n', ' ', 'O', 'n', 'e']

console.log(arr2);

