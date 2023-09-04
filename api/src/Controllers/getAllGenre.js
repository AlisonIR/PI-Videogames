require('dotenv').config()
const axios = require('axios')
const URL = "https://api.rawg.io/api/genres"
const {API_KEY} = process.env
const {Genres} = require('../models/Genres')
//Revisar imports

const getAllGenre = async (req, res) => {
//Busca si existe ese genero en la base de datos, de lo contrario lo crea 
// y devuelve todos los generos
    try {   
         const genresResponse = await axios.get(`${URL}?key=${API_KEY}`)
         const genresResults = genresResponse.data.results;

         genresResults.forEach(async (elem) => {
            await Genres.findOrCreate({
                where : {name: elem.name}
            })
         })

        const allGenres = await Genres.findAll();
        return res.status(200).json(allGenres)
}

catch (error) {
    res.status(500).send(error.message)
}



}
 
 module.exports = {getAllGenre}