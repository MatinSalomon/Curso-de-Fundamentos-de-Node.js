// let suma = 0;
// console.time('bucle')
// for (let i = 1; i <= 1000000; i++) {
//     suma += i;
// }
// console.timeEnd('bucle');



function asincona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina la promesa');
            resolve();
        }, 1000);
    });
}


console.time('Inicio de programa');
asincona()
    .then(() => {
    console.timeEnd('Inicio de programa');
});