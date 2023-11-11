import React, { useState, useEffect } from "react";
import './style.css'

const CategoryList = ({ category, setCategory }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    const apiKey = "0d612d26ed3173de12a35fdfb44374c5";

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
    backgroundColor: "#f0ae27",
  };

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-box">
      <button
        style={category === "" ? activeCategory : null}
        onClick={() => setCategory("")}>
        All
      </button>

      {showAllCategories
        ? genres?.length > 0 &&
          genres.map(genre => (
            <button
              key={genre.id} style={
                category === genre.id.toString() ? activeCategory : null
              }
              onClick={() => setCategory(genre.id.toString())} >
              {genre.name.toUpperCase()}
            </button>
          )) : genres?.length > 0 &&
          genres.slice(0, 5).map(genre => (
            <button
              key={genre.id}style={
              category === genre.id.toString() ? activeCategory : null}
              onClick={() => setCategory(genre.id.toString())}
            >
              {genre.name.toUpperCase()}
            </button>
          ))}
          
      {genres?.length > 5 && (
        <button onClick={toggleShowAllCategories}>
          {showAllCategories ? "Show Less" : `+${genres.length - 5} More`}
        </button>
      )}
    </div>
  );
};

export default CategoryList;