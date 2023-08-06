
// import React from "react"
// import './style.css'

// const CategoryList = ({category,setCategory}) =>{

//     const activeCategory = {
//         backgroundColor:"yellow"
//     }





//  return(
//    <div className="">
//     <h2>Categories</h2>
//     <button style={category == ""? activeCategory:null} onClick={()=>setCategory("")}> All </button>
//     <button  style={category == "35"? activeCategory:null} onClick={()=>setCategory("35")}>Comedy</button>
//     <button style={category == "28"? activeCategory:null}  onClick={()=>setCategory("28")}>Action</button>
//     <button style={category == "10770"? activeCategory:null} onClick={()=>setCategory("10770")}>Arabic</button>
//     <button style={category == "18"? activeCategory:null} onClick={()=>setCategory("18")}>Series</button>
//    </div>
//  )
// }

// export default CategoryList

// import { useEffect, useState } from "react";
// import React,{useState,useEffect} from "react";
// // import '.style/css';

// const CategoryList =({category,setCategory}) =>{
// const[genres,setGenres] = useState([]);

// useEffect(()=>{
//     const apiKey = "6a98dfba7067a7b293ef1635bcc15256"

// // fetch(`https://api.themoviedb.org/3/genre/movie/list?apikey=${apiKey}`)
//     fetch(`https://api.themoviedb.org/3/genre/movie/list?apikey=${apiKey}` )
//     .then(response => response.json())
//     .then(response => setGenres(response.genres))
//     .catch(error => console.error("Error fetching genres",error));
 
// },[])
// const activeCategory = {
// backgroundColor:"cyan"
// };
// return(
//     <div>
//         <button style={category === "" ? activeCategory:null} onClick={()=> setCategory("")}>All</button>
 

//     {genres.length > 0 && genres.map(genre => (
//         <button key={genre.id}
//         style={category === genre.id.toString() ? activeCategory :null} onClick={() => setCategory(genre.id.toString())}> {genre.name.toUpperCase()}
//         </button>
//     ))}
// </div>
// )
// }

// export default CategoryList;


import React, { useState, useEffect } from "react";

const CategoryList = ({ category, setCategory }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "6a98dfba7067a7b293ef1635bcc15256";

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.genres) {
          setGenres(data.genres);
        } else {
          console.error("Invalid API response: Missing genres data");
        }
      })
      .catch(error => console.error("Error fetching genres", error))
      .finally(() => setLoading(false));
  }, []);

  const activeCategory = {
    backgroundColor: "cyan",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button
        style={category === "" ? activeCategory : null}
        onClick={() => setCategory("")}
      >
        All
      </button>

      {genres?.length > 0 &&
        genres.map(genre => (
          <button
            key={genre.id}
            style={
              category === genre.id.toString() ? activeCategory : null
            }
            onClick={() => setCategory(genre.id.toString())}
          >
            {genre.name.toUpperCase()}
          </button>
        ))}
    </div>
  );
};

export default CategoryList;


