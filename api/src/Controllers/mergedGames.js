require('dotenv').config();
const {getApiData} = require('./getApiData')
const {getDbData} = require('./getDbData')

const mergedGames = async () => {
//getApiData trae los juegos de la API
//getDbData trae los juegos creados en BD
//Fusiono ambos en un array y los retorno
  const apiData = await getApiData();
  const dbData = await getDbData();
  const allData = [...apiData, ...dbData]
  return allData;

}

module.exports = {mergedGames}