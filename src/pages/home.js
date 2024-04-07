import React, { useRef, useState } from "react";
import data from "../data";
import "./home.css";
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(data);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="main-container">
      <div className="herosection">
        <div className="text">
          <h1 className="head1">CREATIVITY IN PIXELS</h1>
          <h1 className="head2">GRAPHIC DESIGNE , LOGO DESIGN , WEB DEV</h1>
        </div>
      </div>

      <div className="main-image">
        <img className="image" src="./main.png" alt=""></img>
      </div>
      <div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "2%",
          }}
        >
          DESIGNS
        </p>
        <div className="all-designs">
          {images.map((item, index) => (
            <div className="text-image">
              <div className="design-card" key={index}>
                <img src={item.Image} onClick={() => handleImageClick(item)} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="big-image-container">
              <img
                className="big-image"
                src={selectedImage.Image}
                alt={selectedImage.Title}
              />
              <div className="details">
                <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {selectedImage.title}
                </h1>
              </div>
              <button
                className="closebutton"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="footer">
        <p style={{fontWeight:"bold" , fontSize:"20px",textAlign:"center",marginBottom:"10px"}}>About Us</p>
        <p>
          Welcome to Artiz, where creativity meets excellence! At Artiz, we
          specialize in crafting captivating designs including posters, mockups,
          hoodie designs, t-shirt designs, and logos. Our dedicated team ensures
          high-quality work delivered promptly within 4-5 days, all at a cost
          that ensures exceptional value. Let us bring your vision to life with
          our expert design services.
        </p>
      </div>
      <div className="contact">
        <p style={{fontWeight:"bold" , fontSize:"20px",marginBottom:"20px"}}>Contact Us</p>
        <a style={{}} href="mailto:ajxvanced@gmail.com">Gmaill</a>
      </div>
    </div>
  );
};

export default Home;
