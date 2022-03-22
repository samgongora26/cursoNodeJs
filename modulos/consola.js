//console.log: recibe cualquier tipo y lo muestra en el consola.
console.log('Hola');

//console.info: es equivalente a log pero es usado para informar.
console.info('Hola');

//console.error: es equivalente a log pero es usado para errores.
console.error('Hola');

//console.warn: es equivalente a log pero es usado para warning.
console.warn('Hola');

var table = [
    {
        a:1,
        b: 'Z'
    },
    {
        a:2,
        b:'A'
    }
];
console.table(table)

console.group('Conversacion');
console.log('Hola');
console.log('Bla bla');
console.log('Adios');
console.groupEnd('Conversacion');


console.count('veces');
console.count('veces');
console.count('veces');

console.countReset('veces');

console.count('veces');
console.count('veces');
console.count('veces');