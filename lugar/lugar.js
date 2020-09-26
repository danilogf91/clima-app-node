const axios = require('axios');

const getLugarLatLong = async (dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=16542254b135f37e929e0e583551ac13&q=${encodeUrl}`,     
      });

      const resp = await instance.get();

      if (resp.data.length === 0) {
          throw new Error(`No hay resultados para ${dir}`);
      }
      //console.log(resp.data);
      const data = resp.data;
      const direccion1 = data.name;
      const lat = data.coord.lat;
      const lng = data.coord.lon;

    return {
        direccion1,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}