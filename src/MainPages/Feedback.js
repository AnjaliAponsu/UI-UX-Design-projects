import { useState } from "react";
import Navbar from "../Component/Navbar";

export default function EnhancedFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    rating: 5,
    comments: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Reset form after closing popup if needed
    setFormData({
      name: "",
      email: "",
      destination: "",
      rating: 5,
      comments: ""
    });
  };

  const destinations = [
    "Colombo",
    "Galle",
    "Nuwara Eliya",
    "Sinharajaya",
    "Sigiriya",
    "Kandy",
    "Ella",
    "Jaffna",
    "Trincomalee",
    "Anuradhapura"
  ];

  const testimonials = [
    {
      name: "Emily Johnson",
      destination: "Sigiriya",
      rating: 5,
      comment: "Climbing Sigiriya rock was the highlight of my trip! The views were absolutely breathtaking.",
    },
    {
      name: "Marcus Chen",
      destination: "Galle",
      rating: 5,
      comment: "Galle Fort is truly a gem - wandering the colonial streets feels like stepping back in time.",
    },
    {
      name: "Laura Smith",
      destination: "Nuwara Eliya",
      rating: 4,
      comment: "The tea plantations were stunning and the cool climate was a welcome break from the coastal heat.",
    }
  ];

  // CSS for the preview
  const styles = {
    app: {
      backgroundColor: "#000",
      minHeight: "100vh",
      backgroundImage: 
        "radial-gradient(circle at 25% 10%, rgba(50, 50, 50, 0.3) 0%, transparent 80%), radial-gradient(circle at 75% 90%, rgba(40, 40, 40, 0.2) 0%, transparent 70%)",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflowX: "hidden",
      padding: "20px",
    },
    container: {
      maxWidth: "1140px",
      margin: "40px auto",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      position: "relative",
    },
    headerTitle: {
      fontSize: "36px",
      marginBottom: "15px",
      background: "linear-gradient(to right, #ffffff, #aaa)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      position: "relative",
      paddingBottom: "15px",
    },
    headerTitleAfter: {
      content: "''",
      display: "block",
      width: "80px",
      height: "4px",
      background: "linear-gradient(to right, #fff, #333)",
      margin: "15px auto 0",
      borderRadius: "2px",
    },
    headerSubtitle: {
      fontSize: "16px",
      opacity: "0.8",
      maxWidth: "600px",
      margin: "0 auto",
    },
    content: {
      display: "flex",
      gap: "40px",
      flexDirection: "row",
      padding:"30px",
    },
    formSection: {
      flex: "1",
      backgroundColor: "rgba(17, 17, 17, 0.8)",
      borderRadius: "15px",
      padding: "35px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      marginBottom:"1px",
    },
    formTitle: {
      marginBottom: "30px",
      textAlign: "center",
      fontSize: "24px",
      position: "relative",
      paddingBottom: "15px",
    },
    formTitleAfter: {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "50%", 
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "linear-gradient(to right, #fff, #333)",
      borderRadius: "2px",
    },
    formGroup: {
      marginBottom: "25px",
      position: "relative",
    },
    formLabel: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      fontSize: "15px",
      letterSpacing: "0.5px",
      color: "#eee",
    },
    formInput: {
      width: "90%",
      padding: "8px 16px",
      backgroundColor: "rgba(34, 34, 34, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "15px",
    },
    formInput1: {
      width: "96%",
      padding: "8px 16px",
      backgroundColor: "rgba(34, 34, 34, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "15px",
    },
    ratingInput: {
      display: "flex", 
      justifyContent: "space-between",
      maxWidth: "250px",
      margin: "10px 0",
    },
    starContainer: {
      cursor: "pointer",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
    },
    star: {
      fontSize: "28px",
      color: "#444",
      padding: "0 5px",
    },
    starActive: {
      fontSize: "28px",
      color: "gold",
      textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
      transform: "scale(1.1)",
      padding: "0 5px",
    },
    textarea: {
      width: "90%", 
      padding: "14px 16px",
      backgroundColor: "rgba(34, 34, 34, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "15px",
      minHeight: "120px",
      resize: "vertical",
    },
    button: {
      width: "35%",
      padding: "12px",
      background: "linear-gradient(135deg, #aaa, #eee)",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      letterSpacing: "0.5px",
      marginTop: "15px",
      textTransform: "uppercase",
    },
    successMessage: {
      textAlign: "center",
      padding: "50px 0",
    },
    successMessageTitle: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#eee",
    },
    successMessageText: {
      fontSize: "16px",
      color: "#aaa",
      maxWidth: "80%", 
      margin: "0 auto",
    },
    testimonials: {
      flex: "1",
    },
    testimonialsTitle: {
      marginBottom: "35px",
      textAlign: "center",
      fontSize: "24px",
      position: "relative",
      paddingBottom: "15px",
    },
    testimonialsTitleAfter: {
      content: "''",
      position: "absolute",
      bottom: "0", 
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "linear-gradient(to right, #fff, #333)",
      borderRadius: "2px",
    },
    testimonialCards: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    testimonialCard: {
      width:"500px",
      backgroundColor: "rgba(17, 17, 17, 0.8)",
      borderRadius: "12px",
      padding: "10px",
      display: "flex",
      gap: "20px",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
    },
    testimonialImage: {
      width: "50px",
      height: "50px",
      position: "relative",
      borderRadius: "50%",
      backgroundColor: "#333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#aaa",
      fontWeight: "bold",
      border: "3px solid #000",
      boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.1)",
    },
    testimonialContent: {
      flex: "1",
    },
    testimonialName: {
      margin: "0 0 8px 0",
      fontSize: "20px",
      color: "#eee",
    },
    testimonialDestination: {
      color: "#aaa",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    testimonialRating: {
      marginBottom: "12px",
      display: "flex",
    },
    testimonialComment: {
      fontStyle: "italic",
      opacity: "0.9",
      lineHeight: "1.6",
      fontSize: "15px",
      position: "relative",
      paddingLeft: "20px",
      borderLeft: "3px solid rgba(255, 255, 255, 0.1)",
    },
    // Modal popup styles
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "rgba(17, 17, 17, 0.95)",
      padding: "40px",
      borderRadius: "15px",
      maxWidth: "500px",
      width: "90%",
      textAlign: "center",
      position: "relative",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      animation: "modalFadeIn 0.3s ease-out forwards",
    },
    modalTitle: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#eee",
      position: "relative",
      paddingBottom: "15px",
      display: "inline-block",
    },
    modalTitleAfter: {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "linear-gradient(to right, #fff, #333)",
      borderRadius: "2px",
    },
    modalText: {
      fontSize: "16px",
      color: "#aaa",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    modalButton: {
      padding: "12px 25px",
      background: "linear-gradient(135deg, #aaa, #eee)",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      transition: "transform 0.2s ease",
    },
    modalButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    },
    modalCloseButton: {
      position: "absolute",
      top: "15px",
      right: "15px",
      fontSize: "24px",
      color: "#aaa",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    // Keyframes for modal animation
    "@keyframes modalFadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(-20px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      }
    }
  };

  return (
    <div style={styles.app}>
      <Navbar/>
      <div className="blog-container">

        <div className="blog-header">
          <h1>Share Your Experience</h1>
          <p style={styles.headerSubtitle}>We value your feedback to improve our travel offerings</p>
        </div>
        
        <div style={styles.content}>
          <div style={styles.formSection}>
            <h2 style={styles.formTitle}>Feedback Form</h2>
            
            <div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Your Name</label>
                <input
                  style={styles.formInput}
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email Address</label>
                <input
                  style={styles.formInput}
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Destination Visited</label>
                <select
                  style={styles.formInput1}
                  value={formData.destination}
                  onChange={(e) => handleChange("destination", e.target.value)}
                >
                  <option value="">Select a destination</option>
                  {destinations.map((dest, index) => (
                    <option key={index} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Rating</label>
                <div style={styles.ratingInput}>
                  {[1, 2, 3, 4, 5].map(num => (
                    <div 
                      key={num} 
                      style={styles.starContainer}
                      onClick={() => handleChange("rating", num)}
                    >
                      <span style={formData.rating >= num ? styles.starActive : styles.star}>★</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Comments</label>
                <textarea
                  style={styles.textarea}
                  value={formData.comments}
                  onChange={(e) => handleChange("comments", e.target.value)}
                ></textarea>
              </div>
              
              <div 
                style={styles.button} 
                onClick={handleSubmit}
              >
                Submit Feedback
              </div>
            </div>
          </div>
          
          <div style={styles.testimonials}>
            <h2 style={styles.testimonialsTitle}>Traveler Testimonials</h2>
            
            <div style={styles.testimonialCards}>
              {testimonials.map((testimonial, index) => (
                <div style={styles.testimonialCard} key={index}>
                  <div style={styles.testimonialImage}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div style={styles.testimonialContent}>
                    <h3 style={styles.testimonialName}>{testimonial.name}</h3>
                    <p style={styles.testimonialDestination}>{testimonial.destination}</p>
                    <div style={styles.testimonialRating}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{
                          fontSize: "18px",
                          color: i < testimonial.rating ? "gold" : "#444",
                          marginRight: "3px",
                          textShadow: i < testimonial.rating ? "0 0 5px rgba(255, 215, 0, 0.3)" : "none"
                        }}>★</span>
                      ))}
                    </div>
                    <p style={styles.testimonialComment}>"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Popup Modal */}
      {showPopup && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button 
              style={styles.modalCloseButton}
              onClick={closePopup}
            >
              ×
            </button>
            <h3 style={styles.modalTitle}>
              Thank you for your feedback!
              <div style={styles.modalTitleAfter}></div>
            </h3>
            <p style={styles.modalText}>
              We appreciate you taking the time to share your experience with us. 
              Your insights help us improve our travel services and create better 
              experiences for future travelers.
            </p>
            <button 
              style={styles.modalButton}
              onClick={closePopup}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}