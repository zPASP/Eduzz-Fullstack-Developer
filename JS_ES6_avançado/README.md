# JavaScript ES6

Modulo explicando sobre o desenvolvimento avançado utilizando o JavaScript ES6 .

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
    
- Desfunction
    
    ```jsx
    var sum ({ a }) => a;
    ```
    
