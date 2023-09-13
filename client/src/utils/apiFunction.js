import axios from 'axios'

//Get All Games
export const getAllGames = async() => {
    try{
        let response = await axios.get(`http://localhost:3001/videogames`)
        return response.data
    }
    catch(error) {
        return {
            error: "Failed to load videogames"
        }
    }
}


//Get by ID
export const getById = async(id) => {
        try {
            let response = await axios(`http://localhost:3001/videogames/${id}`);
            return response.data
        } 
        catch (error) {
            return {
                error: "Failed to load details"
            };
        }
    };


//Get by Genre
export const getAllGenres = async() => {
    try{
        let response = await axios.get(`http://localhost:3001/genres`)
        return response.data
    } 
    catch (error){
        return {
            error: "Failed to load Genres"
        }
    }
     
}

//Get By Name
export const getAllNames = async(name) => {
    try {
        let response = await axios(`http://localhost:3001/videogames?name=${name}`);
        return response.data
    } 
    catch (error) {
         
            alert("Game not found!")
            return await getAllGames()
        };
    }


export const postVideogame = async (form) => {
    try {
      await axios.post("http://localhost:3001/videogames", form);
    } catch (error) {
      console.log("Game not created!");
    }
  };