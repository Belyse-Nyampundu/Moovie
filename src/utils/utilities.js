const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

export const getMovies = async () =>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
            method: `GET`,
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`
            }
        })
    const result = await response.json()
    return result
    }
    catch(error){
        return error.message
    }
}
// const categoryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${ACCESS_TOKEN}&with_genres=${category}`;

export const getCategory = async (category) =>{
    try{
        const response = await fetch(`${BASE_URL}/3/discover/movie?with_genres=${category}`,{
            method: `GET`,
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`
            }
        })
    const result = await response.json()
    return result
    }
    catch(error){
        return error.message
    }
}


export const getIMage = async () =>{
  
    try{
        const response = await fetch(`${BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)`,{
            method: `GET`,
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`
            }
        })
    const result = await response.json()
    return result
    }
    catch(error){
        return error.message
    }
}
