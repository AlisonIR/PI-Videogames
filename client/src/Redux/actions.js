
import { getAllGames, getById, getAllGenres, getAllNames, postVideogame } from '../utils/apiFunction';
import { GET_ALL_GAMES, GET_BY_ID, GET_BY_GENRE, GET_ALL_NAMES, ALPHABETICAL_ORDER, FILTERED_ORDER,FILTERED_GENRES,SET_CURRENT_PAGE, GAMES_ORIGIN, POST_GAME
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
        try{
            if(id === "reset"){ // para limpiar el payload del detail
                return dispatch({
                    type: GET_BY_ID,
                    payload: {},
            })

        } else{
            const gamesbyID = await getById(id);
            return dispatch({
                type: GET_BY_ID,
                payload: gamesbyID,
            })}
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
    return async(dispatch) => {
        return dispatch({
          type: ALPHABETICAL_ORDER,
          payload: order,
        })   
    } 
    };

export const orderCards = (order) => {
    return async(dispatch) => {
    return dispatch({
        type: FILTERED_ORDER,
        payload: order})
    }
}

export const filterByGenre = (genres) => {
    return async(dispatch) => {
    return dispatch({
        type: FILTERED_GENRES,
        payload: genres
    })
}
}

export const setCurrentPage = (page) => {
    return async (dispatch) => {
       return dispatch({
        type: SET_CURRENT_PAGE,
        payload: page,
       })
    }
}
    


export const gamesOrigin = (order) => {
    return async (dispatch) => {
    return dispatch ({
        type: GAMES_ORIGIN,
        payload: order
    })
}
}

export const postGame = (form) => {
    return async (dispatch) =>{
        try {
            const newGame = await postVideogame(form);
        
            return dispatch({
                type: POST_GAME,
                payload: newGame,
            })
        } catch (error) {
            console.log('server error!');
        }
    };
}

