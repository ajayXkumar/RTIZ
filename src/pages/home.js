import React, { useRef, useEffect ,useState} from "react";
import data from "../data";
import "./home.css";

const Home = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [images,setimges]=useState(data)
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
        <p style={{fontWeight:"bold", fontSize:"30px", textAlign:"center" ,marginBottom:"2%"}}>DESIGNS</p>
        <div className="all-designs">
          {images.map((item)=>(
             
             <div className="design-card">
                 <img src={item.Image}/>
             </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
