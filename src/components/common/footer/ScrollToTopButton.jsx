import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };

    // Check if the browser supports smooth scrolling
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo(scrollOptions);
    } else {
      // For older browsers that do not support smooth scrolling
      const scrollInterval = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(scrollInterval);
        } else {
          window.scrollBy(0, -50);
        }
      }, 16);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
