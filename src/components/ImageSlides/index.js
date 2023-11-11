import React from "react";
import "./style.css"; // Import your CSS file for styling

const ImageSlide = () => {
  const images = [
    { id: 1, imageName: "mermaid.jpg" },
    // Add more image objects as needed
    { id: 1, imageName: "maleficent-mistress-of-evil.jpg" },
    { id: 1, imageName: "houseofdragon.jpg" },
  ];

  return (
    <div className="image-containers">
      {images.map((image) => (
        <div
          key={image.id}
          className="image-slide"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image.imageName})` }}
        >
          <p className="image-title">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageSlide;