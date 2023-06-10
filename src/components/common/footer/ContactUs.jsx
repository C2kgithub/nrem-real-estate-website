import React from "react";

const ContactUs = () => {
    const openWhatsApp = () => {

      const phoneNumber = "2348151477796";
      const message = "Hello, I'm interested in your services. Can we discuss further?";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    };
  
    return (
      <button className="contact-button" onClick={openWhatsApp}>
        <faWhatsapp className="contact-icon" />
        Contact Us
      </button>
    );
  };
  
  export default ContactUs;