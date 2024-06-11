const { exec, spawn} = require('child_process');
const { stdout } = require('process');

// exec('node modulos/console.js',  (err, stdout, sterr) =>{
//     if(err){
//         console.log(err);
//         return false;
//     }

//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);


console.log(proceso.pid);
console.log(proceso.connected);
