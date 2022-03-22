const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (error, data)=>{
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (error){
        if(error){
            console.log('No he podido escribir en el archivo')
        }else{
            console.log('Se ha escrito correctamente')
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);

// leer(__dirname + '/archivo.txt', console.log)

// borrar(__dirname+'/archivo1.txt',console.log);