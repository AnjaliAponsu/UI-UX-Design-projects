import React, { useState, useEffect } from "react";
import "./Home.css";
import image1 from "../image/5.jpg";
import image2 from "../image/2.webp";
import image3 from "../image/2.jpg";
import image4 from "../image/4.jpg";
import image5 from "../image/1.webp";  
import Navbar from "../Component/Navbar";



const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderItems = [
    {
      img: image1,
      title: "COLOMBO",
      description:
        "Situated in the western province of Sri Lanka, Colombo is the island's capital. Diverse and vibrant, the city is the administrative and economic center of the country. Colombo is Sri Lanka's largest city, home to around a million people is also one of the busiest ports in the South Asia.",
    },
    {
      img: image2,
      title: "GALLE",
      description:
        "Galle is a jewel. A Unesco World Heritage Site, this historic city is a delight to explore on foot, an endlessly exotic old trading port blessed with imposing Dutch-colonial buildings, ancient mosques and churches, grand mansions and museums.",
    },
    {
      img: image3,
      title: "NUWARA ELIYA",
      description:
        "Nuwara-Eliya is a small city located in the center of mountain tea plantations at 1884 meters above sea level, it is a resort with the comfortable climate and fresh mountain air. This city is also called “Little England” due to its buildings in British colonial style surrounded by gardens with English lawns.",
    },
    {
      img: image4,
      title: "SINHARAJAYA",
      description:
        "Located in south-west Sri Lanka, Sinharaja is the country's last viable area of primary tropical rainforest. More than 60% of the trees are endemic and many of them are considered rare.",
    },
    {
      img: image5,
      title: "SIGIRIYA",
      description:
        "Sigiriya is a fifth century fortress in Sri Lanka which has been carved out of an inselberg, a hill of hard volcanic rock. It towers around 600 feet (182.8m) from the forest and gardens below, and has a flat top. This is where the palace of King Kasyapa once stood, reachable up a winding stone staircase.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <Navbar/>
      <div className="slider">
        <div className="list">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">
                <p>Sri Lanka</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button onClick={handlePrev}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>

        <div className="thumbnail">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
