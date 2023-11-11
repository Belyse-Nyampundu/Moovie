import React,{useState,useEffect} from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import './style.css'

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieList = ({search,movies,loading}) => {
const [selectedMovie,setSelectedMovie]= useState()
  
    const filtedMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) )

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
      };
     return(
        <div className="image-container">
                {loading === false && movies.length > 0 && !selectedMovie && filtedMovies.map (item => (
                <ImageContainer props={item} onClick/>

                // <div key={item.id}>
                //  <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt="{item.title}"/>
                // </div>
            ))
            
            }
        </div>
     )
}
export default MovieList