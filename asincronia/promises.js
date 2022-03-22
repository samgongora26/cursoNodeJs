function hola(nombre){
    return new Promise(function (resolve, rejact){
        setTimeout(() => {
            console.log('Hola, '+nombre);
            resolve(nombre);
        }, 500);
    })
}

function hablar(nombre) {
    return new Promise((resolve, rejact) =>{
        setTimeout(() => {
            console.log('Bla bla bla bla');
            resolve(nombre);
            // rejact('Hay un error');
        }, 500);
    });
}

function adios(nombre){
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            console.log(nombre + ', Adios');
            resolve();
        }, 500);
    })
}

console.log('Iniciando el proceso...');

hola('Saul')
    .then (hablar)
    .then (hablar)
    .then (adios)
    .then((nombre) => {
        console.log('Terminando el proceso!');
    })
    .catch(error=>{
        console.log(error);
    })

