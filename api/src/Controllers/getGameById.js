require('dotenv').config()
const axios = require('axios')
const URL = "https://api.rawg.io/api/games/"
const {API_KEY} = process.env

const getGameById = async (req, res) => {
    
    const { idVideogames } = req.params;
    try {
        const datos = await axios.get(`${URL}${idVideogames}?key=${API_KEY}`)
        return datos.data ? res.status(200).json(datos.data) : res.status(404).send('Not found')
    }

    catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getGameById}