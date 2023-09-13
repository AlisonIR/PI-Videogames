const {createGame} = require('./createGame')

const postGames = async (req, res) => {
//Espero a que el juego se cree y lo posteo en BD.
   try {
    const {name, description, releaseDate, rating, platforms, img, genres} = req.body
    const addGame = await createGame (name, description, releaseDate, rating, platforms, img, genres)
    res.send(addGame).json
   } 
   catch (error) {
    res.status(400).send({message: error.message})
   }
}

module.exports = {postGames}