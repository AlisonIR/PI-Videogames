const {Videogame, Genres} = require('../db')


const createGame = async (name, description, releaseDate, rating, platforms, img, genres) => {
 
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
    img,
   
    
 })

 if(genres && genres.length > 0){

    genres.map(async (id)=>{const genreFound = await Genres.findByPk(id) 
        await newGame.setGenres(genreFound)})


}
 return "The game has been created successfully!"
}

module.exports = {createGame}
