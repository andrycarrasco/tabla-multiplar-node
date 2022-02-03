const { crearArchivo } = require('./helpers/multiplicar')
const { arvg } = require('./config/yargs')
require('colors');


console.clear();

// console.log( arvg );


crearArchivo(arvg.b, arvg.h, arvg.l)
    .then(nombreArchivo => console.log( nombreArchivo, 'creado con éxito!'.bold.green ))
    .catch(console.error);