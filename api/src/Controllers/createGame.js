const {Videogame, Genres} = require('../db')


const createGame = async (name, description, releaseDate, rating, platforms, img, genreName) => {
 
    const createdGame = await Videogame.findOne({where: {name}});
    if(createdGame) {
        throw new Error(`${name} already has been created`)
    }

 const newGame = await Videogame.create({
    name, 
    description,
    releaseDate,
    rating,
    platforms,
    img
 })

 if(genreName?.length > 0){
    const genres = await Genres.findAll({
        where: {
            name: genreName,
        },
    })
    await newGame.setGenres(genres)
 }
 return "The game has been created successfully!"
}

module.exports = {createGame}
