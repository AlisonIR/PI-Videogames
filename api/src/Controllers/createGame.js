const createdGame = require('../utils/createdGame')

const createGame = async (req, res) => {

    try{
        const {name, description, released, rating, platform, genre, image} = req.body
        const newGame = await createdGame(name, description, released, rating, platform, genre, image)
        res.send(newGame)
      } 
      catch(error) {
          res.status(400).send({message: error.message})
      }
}

module.exports = {createGame}

