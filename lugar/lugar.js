const axios = require('axios');

const getLugarLatLng = async (dir) => {

	const encodeUlr = encodeURI(dir);

	const instance = axios.create({
			baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
			headers: {'X-RapidAPI-Key': '1d0b1d0125mshff14de63cd15a95p1d75ddjsn0df466cf7a54'}
	});

	const resp = await instance.get();

	if (resp.data.Results.leng === 0) {
		throw new Error ('No hay Datos de esa dirección ', dir);
	}

	const data 		= resp.data.Results[0];
	const direccion = data.name;
	const lat 		= data.lat;
	const lng 		= data.lon;
			

	return{
		direccion,
		lat,
		lng
	}

}

module.exports = {
	getLugarLatLng
}