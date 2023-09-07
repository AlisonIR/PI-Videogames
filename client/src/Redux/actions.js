
import { getAllGames, getById, getAllGenres, getAllNames } from '../utils/apiFunction';
import { GET_ALL_GAMES, GET_BY_ID, GET_BY_GENRE, GET_ALL_NAMES, ALPHABETICAL_ORDER, FILTERED_ORDER,
 } from './action-types';

export const setAllGames = () => { //en el comp llamar a esta funcion
    return async (dispatch) => {
        try {
            const games = await getAllGames();
            return dispatch({
                type: GET_ALL_GAMES,
                payload: games,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const setGameById = (id) => {
    return async (dispatch) => {
        try {
            const gamesbyID = await getById(id);
            return dispatch({
                type: GET_BY_ID,
                payload: gamesbyID,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const setByGenres = () => {
    return async (dispatch) => {
        try {
            const genres = await getAllGenres();
            return dispatch({
                type: GET_BY_GENRE,
                payload: genres,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const setGameByName = (name) => {
    return async (dispatch) => {
        try {
            const names = await getAllNames(name);
            console.log(name)
            return dispatch({
                type: GET_ALL_NAMES,
                payload: names,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const setOrder = (order) => {
        return{
          type: ALPHABETICAL_ORDER,
          payload: order,
        }      
    };

export const orderCards = (order) => {
    return {
        type: FILTERED_ORDER,
        payload: order}
}


