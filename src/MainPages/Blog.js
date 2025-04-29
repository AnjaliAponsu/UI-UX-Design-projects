import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import img2 from "../image/3.jpg";
import image2 from "../image/2.webp";
import Food from "../image/Food.jpg"
import forest from "../image/4.jpg";
import History from "../image/History.jpg"
import Navbar from "../Component/Navbar";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Beaches in Sri Lanka",
      category: "Beaches",
      author: "Jane Smith",
      date: "April 10, 2025",
      image: image2, 
      excerpt: "Discover 10 hidden beaches in Sri Lanka, where untouched beauty and serene seclusion await beyond the usual tourist trails....",
      content: "Sri Lanka is home to some of the most beautiful beaches in the world..."
    },
    {
      id: 2,
      title: "Top 10 Restaurants in Sri Lanka for Culinary Experience",
      category: "Food",
      author: "Michael Wong",
      date: "March 25, 2025",
      image: Food,
      excerpt: "Taste the flavors of this island paradise...",
      content: "From hoppers to kottu roti, Sri Lankan cuisine offers a variety of spicy delights..."
    },
    {
      id: 3,
      title: "Wildlife Safaris: Yala National Park",
      category: "Adventure",
      author: "Priya Kumar",
      date: "March 12, 2025",
      image: forest,
      excerpt: "Encounter leopards, elephants and more...",
      content: "Yala National Park has one of the highest leopard densities in the world..."
    },
    {
      id: 4,
      title: "Tea Plantations of Nuwara Eliya",
      category: "Culture",
      author: "Thomas Green",
      date: "February 28, 2025",
      image: img2,
      excerpt: "Explore the lush hills of tea country...",
      content: "The misty hills of Nuwara Eliya are covered with emerald tea plantations..."
    },
    {
      id: 5,
      title: "Ancient Temples of Anuradhapura",
      category: "History",
      author: "Sarah Johnson",
      date: "February 15, 2025",
      image: History,
      excerpt: "Step back in time at this sacred city...",
      content: "The sacred city of Anuradhapura was established around a cutting from the 'tree of enlightenment'..."
    },
    
  ];

  const categories = ["All", "Beaches", "Food", "Adventure", "Culture", "History"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="App">
      <Navbar/>

      <div className="blog-container">
        <div className="blog-header">
          <h1>Travel Blog</h1>
          <p>Discover Sri Lanka through our travel stories and guides</p>
        </div>
        
        <div className="blog-categories">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Blog;