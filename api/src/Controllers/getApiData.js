require('dotenv').config()
const axios = require('axios');
const URL = 'https://api.rawg.io/api/games'
const {API_KEY} = process.env;

const getApiData = async () => {

    const hundredGames = [];

//Por cada pagina de la API me traigo 20 juegos
//Pusheo la informacion del juego en un array vacío

    for(let i = 1; i<=5; i++){
      let response = await axios.get(`${URL}?key=${API_KEY}&page=${i}`)
      response.data.results.map(Game => {
      hundredGames.push({
         id: Game.id,
         name: Game.name,
         img: Game.background_image,
         genres: Game.genres.map(viGame => viGame.name).join(', '),
         released: Game.released,
         rating: Game.rating,
         platform: Game.platforms.map((viGame) => viGame.platform.name).join(', ')

         });
      });
    };
  return hundredGames;
}

module.exports = {getApiData}