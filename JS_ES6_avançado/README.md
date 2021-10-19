# JavaScript ES6

Modulo explicando sobre o desenvolvimento avançado utilizando o JavaScript ES6 .
### [Link no NOTION](https://three-ziconium-e47.notion.site/JavaScript-ES6-c5ec743a880947d583049c7d43aa0a17)

## Arrow Functions

---

São funções anônimas, podendo serem usadas, associadas a uma variável ou passando como parâmetro para um outra função.

É sempre obrigatório utilizar esses dois caracteres " `=>` "

Pode ser omitida a palavra function e return.

> var soma = (argumento) ⇒ { retorno da função };
> 

Parênteses podem ser ocultados se existir apenas 1 argumento para a função;

 Chaves podem ser ocultado caso o retorno for ser apenas uma expressão pois tem um return explicito.

```jsx
// função normal
var sumOld = function (a, b) {
	return a + b;

// Arrow functions
var sum = (a, b) => a + b;

// visualizando o resultado
console.log(sumOld(20,10); // 30
console.log(sum(20,10); // 30
```

Outras declarações de funções, argumentos e parâmetros.

- Object Literals
    
    ```jsx
    // É possivel criar objetos lieterais atraves de shorthand assim exutando o codigo.
    var nome = 'pedro';
    var whats = 'name';
    var obj = {
    	[`what's your ${whats}?`] : nome, // pode ser criado a declaração das propriedades e atribuir uma variavel já existente e concatenar
    	whats // tambem é possivel omitir o lado direito caso ira ser o mesmo valor já declarado para propriedades e metados.
    };
    var createObj = () => ({ test: 123 });
    console.log(createObj());
    ```
    
- Object with methods
    
    ```jsx
    
    var obj = {
    	showContext: function showContext () {
    		setTimeout (() => {
    			this.log('after 1000ms'); // enviado o parametro para a function log que esta dentro do memso objeto
    		}, 1000);
    	},
    	log: function log(value) {
    		console.log(value);
    	}
    };
    ```
    
- Default Values
    
    ```jsx
    //atribuição de um valor padrão para a variavel caso não seja recebido nenhum ao chamar a função
    var sum (a = 2) => a;
    console.log(sum()); // 2
    //possivel referenciar outros valores tambem caso o mesmo ja tenha sido inicializado.
    var double (a = 1, b = a) => a*b:
    console.log(double(2)); // 4
    ```
    
- Hash Operator
    
    ```jsx
    var sum (...a) => a;
    ```
    
- Lazy Evaluation
    
    ```jsx
    // se trata de poder atribuir um valor de um parametro vindo um resultado de uma outra função
    function randomNumber (decimalsPlaces = 10) {
    	return Math.random() * decimalsPlaces;
    };
    
    	function multiply ( a, b = randonNumber()) { // exemplo de lazy evaluation em que 'b' recebe um valor aleatorio da funçao randomNumber
    		return a * b;
    };
    
    console.log(multiply(5));
    
    // a função é invocada sempre que a função não recebe nenhum argumento para o parametro.
    ```
   
- Rest Operator
    
    ```jsx
    // Se trata de uma declaração dentro da lista de argumentos utilizada por três pontos " ... "
    // pega todos os argumentos e salva na variavel com o prototype de array, assim podendo utilizar todos os metados de arrays.
    function sum (...args) {
    	return args.reduce((acc, value) => acc + value, 0);
    }
    function numbers (n1, n2, ...args) {
    	console.log (n1, n2, args);
    }
    console.log (sum(5,5,5,10));
    numbers(1,2,3,4,5); // 1  2  [3, 4, 5]
    ```
    
- Spread Operator
    
    ```jsx
    //Pega todos os itens do array e transforma em parametro para uma função.
    const sum = (...args) => args.reduce((acc, value) => acc + value, 0);
    const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
    
    function numbers (...args) { //rest
    	return (` Soma dos numeros: ${sum(...args)}  
    						Multiplicação dos numeros: ${multiply(...args)} `); //spread (enviando todos os itens do array
    };
    
    console.log (numeros(5,5,5,5));
    // Soma = 20
    // multiplicação = 625
    
    ```
    
- + Spread Operator
    
    > Ele não fica limitado apenas a arrays, pode ser utilizados também em:
     Strings, arrays, literal objects e objetos iteraveis.
    > 
    
    ```jsx
    const str = 'Digital Innovation One';
    
    function LogArgs (...args) {
        console.log(args);
    }
    
    LogArgs(...str) 
    // ['D', 'i', 'g', 'i', 't', 'a', 'l', ' ', 'I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n', ' ', 'O', 'n', 'e']
    
    ```
    
- Destructuring
    
    ```jsx
    // Com o Destructuring é possivel deixar o codigo mais cruto e mais claro.
    // Ele facilita o acesso a dados dentro de um array ou objeto e a criação de variáveis que contenham esses dados. 
    
    // Declaração de um objeto de exemplo:
    const empresa = {
    	nome: 'Eduzz',
    	endereco: 'Rua feliz, 123 - Brazil',
    	funcionarios: ['Pedro','Arthur'],
    	linguagensUtilizadas: {
    		python: false,
    		javascript: true,
    		java: false,
    	}  	
    }
    
    // para pegar apenas o nome da empresa inves de utilizar ( empresa.nome )
    const {nome} = empresa;
    const {endereço, funcionarios} = empresa; //serve tambem para atribuir a multiplos
    
    //caso queira mudar o nome da variavel
    const { nome: nomedaEmpresa } = empresa; console.log(nomeDaEmpresa) // Eduzz
    
    //caso variavel não esteja declarada
    const {produtos: produtosEmpresa = 'Não informado'} = empresa; // utlizando o default values. assim caso seja tenha a propriedade retorna o valor se não é atribuido o default.
    console.log(produtosEmpresa); // Não informado
    
    // caso queira usar um argumento em uma função.
    const totalFuncionarios = ({funcionarios: {length}) => length;
    console.log(totalFuncionarios(empresa));
    
    // tambem possivel utilizar com array
    arr = [1,2,3,4,5];
    function somar ([a, b] = [1, 0]) {
    	return a + b;
    }
    console.log(somar(arr)); //3 
    console.log(somar()); //1
    ```
    
