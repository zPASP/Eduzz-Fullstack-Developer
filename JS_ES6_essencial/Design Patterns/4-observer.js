// é um pattern muito importante em aplicações javascript. A instância (subcriber) maném uma coleção de objetos ( observers) e notificar todos eles quando ocorrem mudanças no estado.
class Observable {
    constructor () {
        this.observables = []; //é sempre necessario ter uma lista
    }

    subscribe(fn) {
        this.observables.push(fn); // aqui para se inscrever na lista
    }

    notify (data) {
        this.observables.forEach(fn => fn(data)); // recebe uma dado e faz uma forEach pela lista, para cada observador ele manda o dado recebido.
    }

    unsubscribe (fn) {
        this.observables = this.observables.filter(obs => obs !== fn); // recebe alguem da lista e filtra retornando todos que não forem igual.
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('Notofy 1');

o.unsubscribe(logData2);

o.notify('Alguem saiu')

