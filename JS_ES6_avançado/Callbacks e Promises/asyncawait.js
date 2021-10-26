fetch('./data/info.json')
    .then(responseStream => {
        //console.log(responseStream)
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            return Promise.reject(`${responseStream.statusText} - #${responseStream.status}`)
        }
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Err0 :>> ', err);
    });

const simpleFunc = async () => {
    return 123456;
};

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 5000);
});

const functWithTimer = async () => {
    const dataFetch = await fetch('./data/info.json').then(resStream =>
        resStream.json()
    );
    console.log(dataFetch, 'INFO Fetch');

    const dataTimer = await asyncTimer();
    console.log(dataTimer, 'INFO TIMER');
    
    const union = [dataTimer, dataFetch];
    return union;
};

/* simpleFunc()
    .then(data => {
        console.log(data);
    }); */


setTimeout(() => {functWithTimer()
    .then(data => {
        console.log(data[0],data[1], ' --> DADOS APRESENTADOS APENAS APÓS A FINALIZAÇÃO DAS FUNÇÕES');
    });
}, 2000)
