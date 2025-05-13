import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './Hotel.css';

const hotelImages = [
  { id: 1, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o=' },
  { id: 2, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618106.jpg?k=4915ec02da5345d46c01872d2db836eb5b25f65d03e59233fbabd7c106b2704b&o=&hp=1' },
  { id: 3, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618046.jpg?k=62c1b1600750662b16802f12db2350c5dcd3c6585784a8f5003d7e05b14769b8&o=&hp=1' },
  { id: 4, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618181.jpg?k=5bdd53e116b85d7408d5aa9dd81fd6340789d6a12d8f4ffe151a2c74f5a0faaa&o=&hp=1' },
  { id: 5, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/414996972.jpg?k=16ddaec9a6068a34ca1c813b331d2976bbcebd90a00aa7876618e8920b9e4587&o=&hp=1' },
  { id: 6, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497846984.jpg?k=9b6d5b2be21fe59e5014c18df23fb99fdc9bf929ec48171f80b50130452fbb74&o=&hp=1' },
  { id: 7, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/408743583.jpg?k=a93be7a590870b92fc77f3ea3a2adae09ef457f00d5b5c297c6207f68894bd2f&o=&hp=1' },
  { id: 8, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/337436220.jpg?k=0844564d17eccac3b1673bc188bbfbe2873564ce6a2c9b7171c1ecf71748df40&o=&hp=1' },
];

const Hotel = () => {
  const { id } = useParams();
  const { state: hotel } = useLocation();

  // fallback dummy data if user directly visits URL (no state passed)
  const fallbackHotel = {
    title: 'Default Hotel Title',
    adress: 'Unknown Address',
    distance: 'Unknown Distance',
    priceHighlight: 'Book a stay and get a free airport taxi',
    price: 0,
    description: `Default hotel description.`,
  }

  // const hotel = location.state || fallbackHotel;

  if (!hotel) {
    return <p>Hotel details not found!</p>
  }

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
          <span className="hotel-price-highlight">Book a stay over € {hotel.price} at this property and get a free airport taxi</span>

          <div className="hotel-images">
            {hotelImages.map((image, index) => (
              <div className="hotel-image-wrapper" key={image.id}>
                <img src={image.src} alt="hotel" className="hotel-image" onClick={() => handleOpenImageSlider(index)} />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details--text">
              <h2 className="hotel-details--title">Stay in the heart of {hotel.address}</h2>
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
