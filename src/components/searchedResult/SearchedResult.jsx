import { useNavigate } from 'react-router-dom';
import './SearchedResult.css'

const SearchedResult = ({ id, name, location, distance, featureTitle, features, price, rating, ranking, description }) => {
  const navigate = useNavigate();

  const handleSeeAvailability = () => {
    navigate(`/hotels/${id}`, {
      state: {
        id,
        title: name,
        address: location,
        distance,
        featureTitle,
        features,
        price,
        rating,
        ranking,
        description
      }
    });
  };

  return (
    <section className="search-result">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o=&hp=1"
        alt="searched hotel image"
        className="search-result--image"
      />

      <div className="search-result--description">
        <h2 className="search-result--title">{name}</h2>
        <span className="search-result--distance">{location}</span>
        <span className="search-result--distance">{distance}</span>
        <span className="search-result--taxi">Free airport taxi</span>
        <span className="search-result--subtitle">{featureTitle}</span>
        <span className="search-result--features">{features}</span>
        <span className="search-result--cancel-option">Free cancellation</span>
        <span className="search-result--cancel-option-subtitle">You can cancel later, so lock in this great price today.</span>
      </div>
      <div className="search-result--details">
        <div className="search-result--details-rating">
          <span>{ranking}</span>
          <button>{rating.toFixed(1)}</button>
        </div>

        <div className="search-result--details-texts">
          <span className="search-result--details-price">&euro; {price}</span>
          <span className="search-result--details-tax-option">Includes taxes and fees</span>
          <button className="search-result--details-check-btn" onClick={handleSeeAvailability}>See availability</button>
        </div>
      </div>
    </section>
  )
}

export default SearchedResult;
