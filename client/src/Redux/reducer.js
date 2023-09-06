import { GET_ALL_GAMES, GET_BY_ID, GET_BY_GENRE, GET_ALL_NAMES, ALPHABETICAL_ORDER, FILTERED_GENRES } from "./action-types"

const initialState = {
    allGames: [], //this state is filled with all videogames
    filteredAllGames: [],
    gameById: [],
    allGenres: [],
    
}

const reducer = (state = initialState, action) => {
     switch(action.type){
        case GET_ALL_GAMES: {
            return{
                ...state,
                allGames: action.payload,
                filteredAllGames: action.payload
                
            }
        }

        case GET_BY_ID: {
            return {
                ...state,
                gameById: action.payload
            }
        }

        case GET_BY_GENRE: {
            return {
                ...state,
                allGenres: action.payload
            }
        }
        case GET_ALL_NAMES: {
           
            return{
             ...state,
            allGames: action.payload //allGames
          } 
    }
        case ALPHABETICAL_ORDER: {
            let orderArray = [...state.allGames];
            
            if (action.payload === "A-Z") {
                orderArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
                // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
            } else if (action.payload === "Z-A") {
                orderArray.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
        

            } else if (action.payload === "Best rated") {
             orderArray.sort((a, b) => (b.rating > a.rating ? 1 : -1));
        
            } else if (action.payload === "Least rated") {
             orderArray.sort((a, b) => (a.rating > b.rating ? 1 : -1));
         }
        return {
            ...state,
            allGames: orderArray,
            
        }
    }
        case FILTERED_GENRES: {
        const filteredGenres = [...state.allGames]
        return{
            ...state,
            allGames: action.payload === "A"
            ? filteredGenres.sort((a,b) => a.id - b.id)
            : filteredGenres.sort((a,b) => b.id - a.id)
        }
        }

        default:
            return{...state}
     }
}

export default reducer