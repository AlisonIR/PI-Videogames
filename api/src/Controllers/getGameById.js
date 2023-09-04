require('dotenv').config()
const axios = require('axios')
const URL = "https://api.rawg.io/api/games/"
const {API_KEY} = process.env
const {Videogame} = require('../models/Videogame')
const {Genres} = require('../models/Genres')

const getGameById = async (req, res) => {
//Busca primero en la API, luego busca en BD.
    const { idVideogames } = req.params;
    
    if(Number(idVideogames)){

    try {
        const datos = await axios.get(`${URL}${idVideogames}?key=${API_KEY}`)
        return datos.data ? res.status(200).json(datos.data) : res.status(404).send('Not found')
    }

    catch (error) {
        res.status(500).send(error.message)
    }
} else {
    try {
        const dbGame = await Videogame.findOne({where: {id: idVideogames},
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }});

        if(!dbGame){
            throw new Error ("The game does not exist on the database!")
        } else {
            res.status(200).json(dbGame)
        }
    } catch (error){
        res.status(500).send(error.message)
    }
}
}


module.exports = {getGameById}