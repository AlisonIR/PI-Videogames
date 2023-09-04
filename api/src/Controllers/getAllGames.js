require('dotenv').config();

const { mergedGames } = require('./mergedGames')


const getAllGames = async (req, res) => {
 
//Lista de juegos fusionados (API Y BD)

   let gamesList = await mergedGames() 

   const {name} = req.query

   //Filtro para buscar por nombre un videojuego
   if(name){
      let gameName = await gamesList.filter(vg => vg.name.toLowerCase().includes(name.toLowerCase()));
      gameName.length ? res.status(200).send(gameName) : res.status(404).send('Game not found!')
      console.log(gamesList)
   } else {
      res.status(200).send(gamesList) //Envio todos los juegos
   }
 }



module.exports = {getAllGames}