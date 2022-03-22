function hola(nombre,miCallback){
    setTimeout(() => {
        console.log('Hola, '+nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(nombre + ' Adios');
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso');

//Esta es la manera correcta, al terminar el primer callback comienza el otro
hola('Saul',function(){
    adios('Saul',function(){
        console.log('Terminando proceso');
    });
});

//Este es la manera incorrecta, 
//pues si el callback principal puede tardar mas y primero se ejecutara el adios
// hola('saul',function(){});
// adios('saul',function(){});