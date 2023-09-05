const {Videogame, Genres} = require('../db')


//Busco videojuegos creados en la base de datos
const getDbData = async () => {
    const data = await Videogame.findAll({
        include: {
            model: Genres,
            attribute: ["name"],
            through: {
                attributes: []
            }
        }
    });

    return data;
}

module.exports = {getDbData}