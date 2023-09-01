require('dotenv').config();
const {Videogame} = require('../db')

const createdGame = async (name, description, releaseDate, platforms, image, rating, genre) => {
    const gameExist = await Videogame.findOne({where: {name}});

    if(gameExist) {
        throw new Error(`Game ${name} already exists`)
    } else {
        const game = await Videogame.create({
            name,
            description,
            releaseDate,
            platforms,
            image,
            rating,
            genre
        })
        return "Successfully created game"
    }
}

module.exports = {createdGame}