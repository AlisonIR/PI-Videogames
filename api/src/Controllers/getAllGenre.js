require('dotenv').config()
const axios = require('axios')
const URL = "https://api.rawg.io/api/genres"
const {API_KEY} = process.env
const {Genres} = require('../models/Genres')
//Revisar imports

const getAllGenre = async (req, res) => {
    try {   
         const genresResponse = await axios.get(`${URL}?key=${API_KEY}`).data
    
         const genresName = genresResponse.map(gender => gender.name)

         await genresName.map(async (gender, i) => {
            await Genres.findOrCreate({
                where: {name: gender},
                defaults: {id: i+1}
            });
         });

         const allGenresOnDB = Genres.findAll()
         return allGenresOnDB
        }
          

         catch (error) {
          res.status(500).send(error.message)
         }
  
}
 
 module.exports = {getAllGenre}