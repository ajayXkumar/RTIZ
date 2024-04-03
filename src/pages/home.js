import React, { useRef, useState } from "react";
import data from "../data";
import "./home.css";

const Home = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(data);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div ref={containerRef} className="main-container">
      <div  className="herosection">
      <div className="text">
        <h1 className="head1">CREATIVITY IN PIXELS</h1>
        <h1 className="head2">GRAPHIC DESIGNE , LOGO DESIGN , WEB DEV</h1>
      </div>
      </div>
     
      <div className="main-image">
        <img className="image" src="./main.png" alt=""></img>
      </div>
      <div>
        <p style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginBottom: "2%" }}>DESIGNS</p>
        <div className="all-designs">
          {images.map((item, index) => (
            <div className="design-card" key={index}>
              <img src={item.Image} onClick={() => handleImageClick(item)} />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="big-image-container">
              <img className="big-image" src={selectedImage.Image} alt={selectedImage.Title} />
              <div className="details">
                <h1 style={{fontWeight:"bold",fontSize:"20px"}}>{selectedImage.title}</h1>
           
              </div>
              <button className="closebutton" onClick={() => setSelectedImage(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
