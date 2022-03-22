async function hola(nombre){
    return new Promise(function (resolve, rejact){
        setTimeout(() => {
            console.log('Hola, '+nombre);
            resolve(nombre);
        }, 500);
    })
}

async function hablar(nombre) {
    return new Promise((resolve, rejact) =>{
        setTimeout(() => {
            console.log('Bla bla bla bla');
            resolve(nombre);
            // rejact('Hay un error');
        }, 500);
    });
}

async function adios(nombre){
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            console.log(nombre + ', Adios');
            resolve();
        }, 500);
    })
}

async function main(name){
    await hola(name);
    await hablar(name);
    await hablar(name);
    await adios(name);
}

console.log('Iniciando el proceso...');
main('Saul');
console.log('Terminando proceso');