const axios = require('axios');



const getClima = async ( lat, lng) => {

	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2366e23a326a56cbd20e517fa2739166&units=metric`);

	return resp.data.main.temp;

}

module.exports = {
	getClima
}