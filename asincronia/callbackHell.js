// console.log('iniciando proceso...');
// hola('Saul', function(nombre){
//     adios(nombre, function(){
//         console.log('Terminamos el proceso..');
//     });
// });

function hola(nombre,miCallback){
    setTimeout(() => {
        console.log('Hola, '+nombre);
        miCallback();
    }, 500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla');
        callbackHablar();
    }, 500);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(nombre + ' Adios');
        otroCallback();
    }, 500);
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function (){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso..')
hola('Carlos', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});

// console.log('Iniciando proceso');

// //Esta es la manera correcta, al terminar el primer callback comienza el otro
// hola('Saul',function(){

//     hablar(function(){
//         adios('Saul',function(){
//             console.log('Terminando proceso');
//         });
//     });
// });

//Este es la manera incorrecta, 
//pues si el callback principal puede tardar mas y primero se ejecutara el adios
// hola('saul',function(){});
// adios('saul',function(){});