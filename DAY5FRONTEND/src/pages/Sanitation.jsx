import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/SanitationPage.css'; // Import the CSS file
import Navigation from './Navbar';
import Gallerymain from './Gallerymain';
import Footer from './Footer';
import Social from './Social';

const SanitationPage = () => {
  const cleanlinessTips = [
    {
      title: 'Tip 1',
      description: 'Cleaning your body every day.',
    },
    {
      title: 'Tip 2',
      description: 'Brushing your teeth twice a day.',
    },
    {
      title: 'Tip 3',
      description: 'Increase the amount of fresh air by opening windows.',
    },
  ];

  const stepsnew = [
    {
      title: 'Wash Hands',
      iconClass: 'fas fa-hand-holding-water',
    },
    {
      title: 'Wear a Mask for Protection',
      iconClass: 'fas fa-heart',
    },
    {
      title: 'Social Distance',
      iconClass: 'fas fa-people-arrows',
    },
    {
      title: 'Disinfect Surfaces',
      iconClass: 'fas fa-spray-can',
    },
    {
      title: 'Take Medicines',
      iconClass: 'fas fa-pills', // Use an appropriate medicine symbol
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the speed (in milliseconds) for auto-sliding
  };

  return (
    <>
      <Navigation />
      <Social/>
      <div className="bgf1"></div>
      <div className="bgf1 bgf2"></div>
      <div className="bgf1 bgf3"></div>
      <div className="sanitation-page">
        <h1 className="san">Cleanliness Tips</h1>

        <Slider {...settings}>
          {cleanlinessTips.map((tip, index) => (
            <div className="cleanliness-card" key={index}>
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          ))}
        </Slider>
        <Gallerymain/>
        <h2 className="san1">Steps for Sanitation</h2>
        <div className="step-cards">
          {stepsnew.map((step, index) => (
            <div className="stepsnew" key={index}>
              <i className={`iconnew ${step.iconClass}`}></i>
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SanitationPage;
