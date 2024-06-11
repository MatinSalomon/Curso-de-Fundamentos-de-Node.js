const { notDeepEqual } = require("assert");

process.on('exit', () => {
    console.log('el proceso ACABO');
})

process.on('beforeExit', () => {
    console.log('el proceso esta por acabar');
})

process.on('uncaughtException', (err, origen) => {
    console.log('se ha capturado un error');
    console.log(err);
})

not()

console.log('w');

 