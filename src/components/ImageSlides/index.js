import React, { useState, useEffect } from "react";
import { getCategory } from "../../utils/utilities";
import "./style.css"; // Import your CSS file for styling

const ImageSlide = () => {
  const images = [
    { id: 1, imageName: "mermaid.jpg"},
    { id: 2, imageName: "maleficent-mistress-of-evil.jpg"},
    { id: 3, imageName: "houseofdragon.jpg"},
    // Add more image objects as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="image-containers">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="image-slide"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${image.imageName})`,
            display: index === currentImageIndex ? "block" : "none",
          }}
        >
          <p className="image-title">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageSlide;
