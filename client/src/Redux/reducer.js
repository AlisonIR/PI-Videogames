import { GET_ALL_GAMES, GET_BY_ID, GET_BY_GENRE, GET_ALL_NAMES, ALPHABETICAL_ORDER, FILTERED_ORDER, FILTERED_GENRES, SET_CURRENT_PAGE, GAMES_ORIGIN, POST_GAME} from "./action-types"

const initialState = {
    allGames: [], //this state is filled with all videogames
    allGamesCopy: [],
    gameById: [],
    allGenres: [],
    videogames: [],
    currentPage: 1,
    itemsPerPage: 15,
    
}

const reducer = (state = initialState, action) => {
     switch(action.type){
      
        case GET_ALL_GAMES: {
            return{
                ...state,
                allGames: action.payload,
                allGamesCopy: action.payload
                
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
        case FILTERED_ORDER: {
        const filtered = [...state.allGames]
        return{
            ...state,
            allGames: action.payload === "A"
            ? filtered.sort((a,b) => a.id - b.id)
            : filtered.sort((a,b) => b.id - a.id)
        }
        }

        case FILTERED_GENRES: {
        const filteredArr = state.allGamesCopy.filter((elem) => elem.genres?.includes(action.payload))
        return{
            ...state,
            allGames: filteredArr
          }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case GAMES_ORIGIN : {
            let originGames = [...state.allGamesCopy]
            if(action.payload === 'All'){
                return {
                    ...state,
                    allGames: [...state.allGamesCopy]
                }
            }
            if(action.payload === 'api') {
                const apiGames = originGames.filter((game) => Number.isInteger(game.id))
                

                return{
                    ...state,
                    allGames: apiGames
                }
            }

            if (action.payload === 'db') {
                const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                
                const dbGames = originGames.filter((game) => uuidv4Pattern.test(game.id));
               
                
                return {
                  ...state,
                  allGames: dbGames,
                };
              }
        }
    

        case POST_GAME: {
            return {
              ...state,
              videogames: [...state.videogames, action.payload],
            };
        }

        default:
            return{...state}
     }
}

export default reducer