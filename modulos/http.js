const http = require('http')

http.createServer(router).listen(8080)

function router(req, res) {
    console.log(req.url);

    switch (req.url){

        case '/api':
            res.writeHead(200, { 'Content-Type': 'application/json' })
 
            let salida = {
                nombre: 'Juan',
                edad: 32,
                url: req.url
            }
        
            res.write(JSON.stringify(salida))
            res.end()

            break
        default:
            res.write('problemas problemas');
            res.end()
    }

   
}


console.log('escuchando en 8080');