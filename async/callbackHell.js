function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('hola,' + nombre);
        miCallback();
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function() {
        console.log('bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('adios', nombre);
        otroCallback();
    }, 1000);
}

function conversacion (nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --
console.log('Iniciando proceso');

conversacion('Alexis', 3, function() {
    console.log('Terminando proceso...');
});

// hola('alexis', function() {
//     hablar( function () {
//         hablar( function () {
//             hablar( function () {
//                 adios('Alexis', function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     })
// });
