
import React, { useState } from "react";
import './style.css'
import MovieList from "../MovieList";

const NavigationBar = ({searchNav,setSearch}) =>{
 console.log(searchNav)
return(
    <div className="nav">
        <h1>M<span>oo</span>vie</h1>
        <div className="head">
        <input type="text" id="search" value={searchNav} onChange={(e)=> setSearch(e.target.value)} placeholder="Type a movie"></input>
        
        <a href="">Home</a>
        <a href="">My List</a>
        <button type="submit">Sign in</button>
        </div>
     
        

    </div>
)

}
export default NavigationBar