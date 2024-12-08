import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";
import hero_video from "../../assets/sand_dunes.mp4";
import HeroSvg from "../../assets/IGNUS 25@2x.svg";
import IGNUS from "../../assets/ignus.png";

function Home() {
  const [isScrolledToAbout, setIsScrolledToAbout] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsScrolledToAbout(true);
        } else {
          setIsScrolledToAbout(false);
        }
      });
    }, observerOptions);

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="foreground">
        <img
          src="https://ignus-23-gold.vercel.app/assets/Layer4-01-vkUZWpPZ.svg"
          alt="foreground"
          id="foreground-svg-4"
        />
        <img
          src="https://ignus-23-gold.vercel.app/assets/Layer3-01-omvuKFCA.svg"
          alt="foreground"
          id="foreground-svg-3"
        />
        <img
          src="https://ignus-23-gold.vercel.app/assets/Layer2-01-huoY4SqN.svg"
          alt="foreground"
          id="foreground-svg-2"
        />
        <img
          src="https://ignus-23-gold.vercel.app/assets/Layer1-01-0cQbH3Dx.svg"
          alt="foreground"
          id="foreground-svg-1"
        />
      </div>
      <div className="hero-section">
        <video src={hero_video} autoPlay muted loop className="bg-video" />
        <div className="hero-text">
          <img src={HeroSvg} alt="HeroSvg" className="heforevg" />
        </div>
      </div>
      <div className="about-section">
        <section
          id="about-us"
          className={`scroll-section about-section ${
            isScrolledToAbout ? "scroll-door-open" : ""
          }`}
          ref={aboutSectionRef}
        >
          <div className="scroll-door-container">
            <div className="scroll-door left-door"></div>
            <div className="scroll-door right-door"></div>
            <div className="section-content">
              <div className="about-us-heading">
                <h2>ABOUT US</h2>
              </div>
              <div className="about-us-content">
                <div className="about-us-para">
                  <p>
                    IGNUS, the much anticipated annual socio-cultural fest of
                    IIT Jodhpur, is now back, after three years. Ignus
                    celebrates art, culture and pluralism. It provides a stage
                    for the creative and intellectual minds from across the
                    country to showcase their incredible talent and creativity
                    through art and culture.
                  </p>
                </div>
                <div className="about-us-logo">
                  <img src={IGNUS} alt="IGNUS" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
