const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 2000);
});

const generateErr = false;

const doOtherthingPromise = () =>
    new Promise((resolve, reject) => {
        if (!generateErr) {
            setTimeout(function () {
                // did something
                resolve('Second data');
            }, 1000);
        } else {
            reject('Somethig went wrong');
        }
    });
// Status possiveis das Promises:
// Pending : Quando esta em execução
// Fulfilled : Quando já finalizou a execuçao
// Rejected: Quando ja finalizou a excução e deu algum erro

// console.log(doOtherthingPromise) | out: Promise {<pending>}

/* doSomethingPromise.then(data => console.log(data));
doOtherthingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error)); */

// executando a promisse de forma continua 
doSomethingPromise
    .then(data => {
        console.log(data)
        return doOtherthingPromise();
    })
    .then(data2 => console.log(`Promisse 2: ${data2}`))
    .catch(error => console.log('Ops', error));

// executando um array de promisse e só da o retorno quando finaliza todas em um array
Promise.all ([doOtherthingPromise(), doSomethingPromise])
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });



