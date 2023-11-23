import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const CategoryList = ({ category, setCategory }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "0d612d26ed3173de12a35fdfb44374c5";

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.genres) {
          setGenres(data.genres);
        } else {
          console.error("Invalid API response: Missing genres data");
        }
      })
      .catch((error) => console.error("Error fetching genres", error))
      .finally(() => setLoading(false));
  }, []);

  const activeCategory = {
    backgroundColor: "#f0ae27",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: genres.length >= 10 ? 10 : genres.length, // Reduced to 3 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: genres.length >= 2 ? 2 : genres.length, // Adjust for smaller screens
        },
      },
    ],
  };

  return (
    <div className="category-box">
      <Slider {...settings}>
        <button
          key="all"
          className={`category-btn ${category === "" ? "active" : ""}`}
          onClick={() => setCategory("")}
    
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`category-btn ${category === genre.id.toString() ? "active" : ""}`}
            onClick={() => setCategory(genre.id.toString())}

          >
            {genre.name.toUpperCase()}
          </button>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryList;
