import axios from 'axios'
import { GET_ALL_GAMES } from './action-types'

export const getAllGames = () => {
    return async function(dispatch){
     let response = await axios.get('https://api.rawg.io/api/games?key=7b1d3058d3fa4ef9ab5b75c526a7a46f')
     return dispatch({type: GET_ALL_GAMES, payload: response.data.results})
     
    }

}