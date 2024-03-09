import React, { useRef, useEffect ,useState} from "react";
import "./home.css";

const Home = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const [showAnotherImage, setShowAnotherImage] = useState(false);

  const handleClick = () => {
    setShowAnotherImage(!showAnotherImage);
  };

  const handleMouseEnter = () => {
    setShowAnotherImage(true);
  };

  const handleMouseLeave = () => {
    setShowAnotherImage(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const image = imageRef.current;
      const text = textRef.current;

      
      if (container && image && text) {
        const scrollY = window.scrollY;
        const containerTop = container.offsetTop;
        const containerBottom = containerTop + container.offsetHeight;
        const containerHeight = container.offsetHeight;

        // Calculate the percentage of scrolling inside the container
        const scrollPercentage =
          (scrollY - containerTop) / (containerHeight - window.innerHeight);

        // Adjust the speed of scrolling for the image
        const imageScrollSpeed = 1; // Adjusted for slower scrolling

        // Calculate the vertical displacement for the image
        const imageTranslateY =
          -scrollPercentage * image.offsetHeight * imageScrollSpeed;

        // Apply the vertical displacement to the image
        image.style.transform = `translateY(${imageTranslateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="main-container">
      <div className="text" ref={textRef}>
        <h1 className="head1">creative cool build </h1>
        <h1 className="head2">NAMASTE</h1>
      </div>
      <div className="main-image">
        <img className="image" ref={imageRef} src="./1.png" alt=""></img>
      </div>
      <div>
        <p>designs</p>
        <div className="all-designs">
        <div className="design-card" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showAnotherImage ? (
          <img className="designs" src="./2.png" alt="Another Image"></img>
        ) : (
          <img className="designs" src="./1.png" alt="Original Image"></img>
        )}
      </div>
      <div className="design-card" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showAnotherImage ? (
          <img className="designs" src="./3.png" alt="Another Image"></img>
        ) : (
          <img className="designs" src="./3.png" alt="Original Image"></img>
        )}
      </div>

          <div className="design-card">
            <img className="designs" src="./4.png" alt=""></img>
          </div>
          <div className="design-card">
            <img className="designs" src="./5.png" alt=""></img>
          </div>
          <div className="design-card">
            <img className="designs" src="./2.png" alt=""></img>
          </div>
          <div className="design-card">
            <img className="designs" src="./5.png" alt=""></img>
          </div>
          <div className="design-card">
            <img className="designs" src="./1.png" alt=""></img>
          </div>
          <div className="design-card">
            <img className="designs" src="./4.png" alt=""></img>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
