function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hola, ' + nombre);
            const sum = 2+2;
            resolve(sum);
        }, 1000);
    });
}

function hablar(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla');
            resolve(data);
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            console.log('adios', nombre);
            resolve();
        }, 1000);
    })
}


//-----------------------
console.log('iniciando el proceso');
hola('martin')
    .then(hablar)
    .then(adios)
    .then(nombre => console.log('terminado')) 