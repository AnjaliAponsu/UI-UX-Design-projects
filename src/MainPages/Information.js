import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Information.css"; // You'll need to create this CSS file
import Navbar from "../Component/Navbar";
import map from "../image/map.jpg";
import Wether from "../image/Wether.jpg";
import Transportation from "../image/Transportation.jpg";
import Money from "../image/Money.webp"; 
import Safe from "../image/Safe.jpg";

const Information = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: {
      title: "Sri Lanka Overview",
      content: "Sri Lanka, formerly known as Ceylon, is an island country located in the Indian Ocean. Known for its diverse landscapes ranging from rainforest and arid plains to highlands and sandy beaches, it's a treasure trove for travelers. The country is famed for its ancient Buddhist ruins and vibrant culture that dates back more than 2,000 years.",
      image: map
    },
    weather: {
      title: "Weather & Climate",
      content: "Sri Lanka has a tropical climate with distinct dry and wet seasons. The southwest monsoon brings rain to the southwest of Sri Lanka between May and September, while the northeast monsoon rains occur in the north and east between October and January. The best time to visit depends on which parts of the island you plan to explore.",
      image: Wether
    },
    transport: {
      title: "Transportation",
      content: "Getting around Sri Lanka offers various options including trains, buses, tuk-tuks, and taxis. The train journeys, particularly through the hill country, are considered some of the most scenic in the world. Renting a car with a driver is also a popular option for tourists who want flexibility and local knowledge.",
      image: Transportation
    },
    currency: {
      title: "Currency & Money",
      content: "The currency of Sri Lanka is the Sri Lankan Rupee (LKR). ATMs are widely available in major cities and tourist areas. Credit cards are accepted at most hotels and larger restaurants, though smaller establishments may only accept cash. It's advisable to have some local currency for small purchases and transportation.",
      image: Money
    },
    safety: {
      title: "Safety Tips",
      content: "Sri Lanka is generally a safe country for travelers. However, like anywhere else, it's important to take normal precautions. Keep your valuables secure, be aware of your surroundings, and respect local customs and traditions. During monsoon season, check weather reports as flooding can occur in certain areas.",
      image: Safe
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <div className="blog-container">
        <div className="blog-header">
          <h1>Travel Information</h1>
          <p>Everything you need to know before visiting Sri Lanka</p>
        </div>
        
        <div className="info-tabs">
          {Object.keys(tabContent).map((tab) => (
            <button 
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="info-content">
          <div className="info-text">
            <h2>{tabContent[activeTab].title}</h2>
            <p>{tabContent[activeTab].content}</p>
            {activeTab === "visa" && (
              <button className="apply-visa-btn">Apply for ETA</button>
            )}
          </div>
          <div className="info-image">
            <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Information;