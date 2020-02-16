const argv= require('yargs').option(
    {
        direccion: {
            alias: 'd',
            desc: 'Direccion de ciudad para obtener el clima',
            demand: true
        }
    }
).argv
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const obtenerLugar = async (direc) => {
    
    try{
        const resp =  await lugar.getLugar(direc);
        const respClima =  await clima.getClima(resp.lat, resp.lng)
        return `El clima de ${resp.direccion} es ${respClima}`
    }catch(err){
        return `No se encontro el clima de ${direc}`
    }
}

obtenerLugar(argv.direccion)
.then(
    (clima) => console.log(clima) 
    );
