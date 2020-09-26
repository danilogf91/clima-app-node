const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLong } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/*
lugar.getLugarLatLong(argv.direccion)
            .then(console.log);
        

clima.getClima(40.75, -74.0)
        .then(console.log)
        .catch(console.log);
*/

const getInfo = async (direccion) => {       
    try {
        const sitio = await (lugar.getLugarLatLong(direccion)); 
        const salida = await (clima.getClima(sitio.lat, sitio.lng));            
        return `El clima de ${sitio.direccion1} es de ${salida}`;
    } catch (error) {
        return `No se puede determinar el clima de ${direccion}`;
    }
};

    getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);
        