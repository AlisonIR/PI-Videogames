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
        const {data} = await axios.get(`${URL}${id}?key=${API_KEY}`)
        if(data){
        const foundGame = {
        ...data,
        img: data.background_image,
        description: data.description_raw,
        releaseDate: data.released,
        platforms: data.parent_platforms.map((platform) => platform.platform.name).join(", "),
        }
        return res.status (200).json(foundGame)  
     }   else res.status(404).send('Not Found')
        
   }
     catch (error){
        res.status(500).send(error.message)
    }
} else{
    try {
        const gameInDb = await Videogame.findOne({where: {id: id},
        include: {
        model: Genres,
        attributes:['name'],
        through:{
            attributes:[]
        }
        }});
        if (!gameInDb) {
            throw new Error("Not found")
        } else {
            res.status(200).json(gameInDb)
        }
    } catch (error) {
        res.status(404).send(error.nessage)
    }
}

}

module.exports = {getGameById}