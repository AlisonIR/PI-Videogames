require('dotenv').config()
const axios = require('axios')
const URL = "https://api.rawg.io/api/games/"
const {API_KEY} = process.env
const {Videogame, Genres} = require('../db')


const getGameById = async (req, res) => {
//Busca primero en la API, luego busca en BD.
    const {id} = req.params;
    
    if(Number(id)){

    try {
        const datos = await axios.get(`${URL}${id}?key=${API_KEY}`)
        return datos.data ? res.status(200).json(datos.data) : res.status(404).send('Not found')
    }

    catch (error) {
        res.status(500).send(error.message)
    }
} else {
    try {
        const dbGame = await Videogame.findOne({where: {id: id},
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