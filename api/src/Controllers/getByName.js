require('dotenv').config()
const axios = require('axios');
const URL = "https://api.rawg.io/api/games"
const {API_KEY} = process.env

const getByName = async (req, res) => {
    const {name} = req.query
    if(name){
     try {
       const respUno = await axios.get(`${URL}?search=${name}&key=${API_KEY}`)
       return respUno.data ? res.status(200).json(respUno.data) : res.status(404).send('Not found')
     }
     catch (error) {
       res.status(500).send(error.message)
     }
    }
   else {
       try {   
           const respDos = await axios.get(`${URL}?key=${API_KEY}`)
           return respDos.data ?  res.status(200).json(respDos.data) : res.status(404).send('Not found!')
           }
           catch (error) {
            res.status(500).send(error.message)
           }
    }
   
   }

module.exports = {getByName}