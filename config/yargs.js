
const argv = require('yargs')
				.command('direccion','Direccion para obetner clima',{
					direccion: {
						alias: 'd',
						desc: 'Dirección de la ciudad para obtener el clima',
						demand: true
					}
				})
				.help()
				.argv;

module.exports = {
    argv
}