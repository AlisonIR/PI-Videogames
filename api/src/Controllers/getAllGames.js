require('dotenv').config()
const axios = require('axios');
const URL = "https://api.rawg.io/api/games"
const {API_KEY} = process.env

const getAllGames = async (req, res) => {
   try {   
        const respDos = await axios.get(`${URL}?key=${API_KEY}`)
        return respDos.data ?  res.status(200).json(respDos.data) : res.status(404).send('Not found!')
        }
        catch (error) {
         res.status(500).send(error.message)
        }
 }



module.exports = {getAllGames}