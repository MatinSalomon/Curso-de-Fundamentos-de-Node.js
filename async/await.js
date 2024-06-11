async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hola, ' + nombre);
            const sum = 2+2;
            resolve(sum);
        }, 1000);
    });
}

async function hablar(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla');
            resolve(data);
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            console.log('adios', nombre);
            resolve();
        }, 1000);
    })
}


async function main() {
    let data = await hola('martin');
    await hablar();
    await adios(data);
    console.log('terminado el proceso');
}
main()

console.log('esto pasara antes');