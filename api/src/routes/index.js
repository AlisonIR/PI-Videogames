const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllGames } = require('../Controllers/getAllGames')
const { getGameById } = require('../Controllers/getGameById')
//const { createGame } = require('../Controllers/createGame')
const { getByName } = require('../Controllers/getByName')
const { getAllGenre } = require('../Controllers/getAllGenre')
const { postGames } = require('../Controllers/postGames')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.get('/videogames', getAllGames)
 router.get('/videogames/name', getByName)
 router.get('/videogames/:idVideogames', getGameById)
 router.get('/genres', getAllGenre)
 router.post('/videogames', postGames)

 //router.post('/videogames/created', createGame)



module.exports = router;
