const axios = require('axios');

const getClima = async (lat, lng) =>{
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=16542254b135f37e929e0e583551ac13&units=metric`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}