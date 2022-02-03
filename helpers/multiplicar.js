const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (base = 1, hasta = 1, listar) => {
    
    try {
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ (base * i).toString().green.bold }\n`;
        }
        
        if (listar) {
            console.clear();
            console.log('====================='.yellow);
            console.log('     TABLA DEL'.yellow, colors.cyan(base));
            console.log('====================='.yellow);
            console.log(consola.italic);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        
        return `tabla-${ base }.txt`.underline.bold.cyan;
    } catch (error) {
        throw error
    }
}


module.exports = {
    crearArchivo
}