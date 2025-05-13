import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

import './Hotel.css';

// Dummy hotel data by ID (for now, static, can be fetched dynamically later)
const hotelData = {
  '1': {
    title: 'Lavie Maison Central AC Hot Tub',
    address: '123 Boulvard Bergers, 750011 Paris',
    distance: '500m from center',
    priceHighlight: 'Book a stay over € 250 at this property and get a free airport taxi',
    price: 1250,
    description: `Located in a central area of ​​Paris, Lavie Maison Central AC Hot Tub offers a hot tub. 
    Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
    This air-conditioned apartment consists of 3 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
    Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
    Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
    The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.`
  },
  '2': {
    title: 'Hotel Radisson',
    address: '4 Rue Gustave Eiffel, 750004 Paris',
    distance: '50m from center',
    priceHighlight: 'Book a stay over € 350 at this property and get a free airport taxi',
    price: 1250,
    description: `Located in a central area of ​​Paris, Radisson Hotel offers a world class services. 
    Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
    This air-conditioned apartment consists of 3 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
    Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
    Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
    The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.`
  }
  // Could add more hotel objects for other IDs
};

const hotelImages = [
  { id: 1, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o=' },
  { id: 2, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618106.jpg?k=4915ec02da5345d46c01872d2db836eb5b25f65d03e59233fbabd7c106b2704b&o=&hp=1' },
  { id: 3, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618046.jpg?k=62c1b1600750662b16802f12db2350c5dcd3c6585784a8f5003d7e05b14769b8&o=&hp=1' },
  { id: 4, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618181.jpg?k=5bdd53e116b85d7408d5aa9dd81fd6340789d6a12d8f4ffe151a2c74f5a0faaa&o=&hp=1' },
];

const Hotel = () => {
  const { id } = useParams();
  const hotel = hotelData[id] || hotelData['1']; // fallback to '1' if id not found (you can handle 404 instead)

  const [slideImageIndex, setSlideImageIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const handleOpenImageSlider = (index) => {
    setSlideImageIndex(index);
    setOpenSlider(true);
  };

  const handlePreviousClick = () => {
    setSlideImageIndex(slideImageIndex === 0 ? hotelImages.length - 1 : slideImageIndex - 1);
  };

  const handleNextImageClick = () => {
    setSlideImageIndex((slideImageIndex + 1) % hotelImages.length);
  };

  const handleCloseSlider = () => {
    setOpenSlider(false);
  };

  return (
    <>
      <Header type="list" />

      {openSlider && (
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} onClick={handleCloseSlider} className="slider-close-btn" />
          <FontAwesomeIcon icon={faCircleArrowLeft} onClick={handlePreviousClick} className="slider-arrow-btn" />
          <div className="slider-wrapper">
            <img src={hotelImages[slideImageIndex].src} alt="hotel" className="slider-image" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} onClick={handleNextImageClick} className="slider-arrow-btn" />
        </div>
      )}

      <section className="hotel-container">
        <div className="hotel-wrapper">
          <button className="book-now-btn">Reserve or Book Now!</button>
          <h2 className="hotel-title">{hotel.title}</h2>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel.address}</span>
          </div>

          <span className="hotel-distance">{hotel.distance}</span>
          <span className="hotel-price-highlight">{hotel.priceHighlight}</span>

          <div className="hotel-images">
            {hotelImages.map((image, index) => (
              <div className="hotel-image-wrapper" key={image.id}>
                <img src={image.src} alt="hotel" className="hotel-image" onClick={() => handleOpenImageSlider(index)} />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details--text">
              <h2 className="hotel-details--title">Stay in the heart of Paris</h2>
              <p className="hotel-details--description">{hotel.description}</p>
            </div>

            <div className="hotel-details--price">
              <h3>Perfect for 5-night stay!</h3>
              <span>Located in a central area of Paris, this property has an excellent location score of 9.8!</span>
              <h4>
                <strong>&euro; {hotel.price}</strong> (5 nights)
              </h4>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </section>
    </>
  );
};

export default Hotel;
