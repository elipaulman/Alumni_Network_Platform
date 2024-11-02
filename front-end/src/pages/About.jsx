import React from 'react';
import mentor from "../images/mentor.png";
import image1 from "../images/image1.png"; 
import image2 from "../images/image2.png"; 
import image3 from "../images/image3.png"; 

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container">
        <h2 className="section__title-1">About Us</h2>
        <div className="about__info">
          <p className="about__description">
            At LMCC, we’re passionate about creating a vibrant community where alumni from all walks of life come together, each bringing their unique stories and experiences. We believe that by fostering open conversations, we can spark collaboration and mutual growth.
          </p>
          <div className="flex-1 flex items-center justify-center p-6 flex-col">
            <img
              src={mentor}
              alt="mentor"
              className="mb-6 w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          

          <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Key Focus Areas</h3><br />

          {/* Image Cards Section */}
          <div className="image-cards">
            <ImageCard src={image1} text="Community Building" />
            <ImageCard src={image2} text="Collaboration Opportunities" />
            <ImageCard src={image3} text="Artistic Expression" />
          </div>


          <br></br>
          <ul className="about__list">
            <li className="about__items">Community Building: We cultivate spaces where relationships flourish.</li>
            <li className="about__items">Collaboration Opportunities: We connect individuals to inspire joint projects and creative endeavors.</li>
            <li className="about__items">Inclusive Artistic Expression: We celebrate diverse voices and perspectives in the arts.</li>
          </ul>
          
        </div>
      </div>
    </section>
  );
};

// ImageCard Component
const ImageCard = ({ src, text }) => {
  return (
    <div className="image-card">
      <img src={src} alt={text} className="image-card__img" />
      <div className="image-card__overlay">
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default About;
