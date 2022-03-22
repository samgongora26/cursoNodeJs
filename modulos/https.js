// const http = require('http');
const { createServer } = require('http');
const port = 3000;

function router(req, res){
    switch(req.url){
        case '/':
            res.end('<h1>Hola mundo</h1>');
            break;
        default :
            res.write('Error 404. No existe esta url');
            res.end();
    }
}

const server = createServer(router);
server.listen(port, (err) => {
    if(err){
        console.info('Could not establish a connection to the server');
        console.error(err);
    }
    console.info(`> Ready On http://localhost:${port}`);
});

// http.createServer(router).listen(3000);

// function router (req, res){
//     console.log('Nueva peticion!');
//     console.log(req.url);

//     switch (req.url) {
//         case '/hola':
//             res.write('Hola que tal');
//             res.end();
//             break;
//         default:
//             res.write('Error 404: La verdad no se que quieres bro');
//             res.end();
//             break;
//     }

//     // res.write('Hola ya se usar http de nodejs')

//     // res.writeHead(201, {'Content-Type' : 'text-plain'})

//     // res.end();
// }

// console.log('Escuchando http en el puerto 3000');

