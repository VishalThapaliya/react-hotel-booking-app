import './SearchedResult.css'

const SearchedResult = () => {
  return (
    <section className="search-result">
      <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o=&hp=1" 
        alt="searched hotel image" 
        className="search-result--image" 
      />

      <div className="search-result--description">
        <h2 className="search-result--title">Lavie Maison Central AC Hot Tub</h2>
        <span className="search-result--distance">500m from center</span>
        <span className="search-result--taxi">Free airport taxi</span>
        <span className="search-result--subtitle">Apartment with 3 deluxe rooms</span>
        <span className="search-result--features">4 Beds (3 beds + 1 sofa-bed) - 1 living room - 2 bathrooms</span>
        <span className="search-result--cancel-option">Free cancellation</span>
        <span className="search-result--cancel-option-subtitle">You can cancel later, so lock in this great price today.</span>
      </div>
      <div className="search-result--details">
        <div className="search-result--details-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className="search-result--details-texts">
          <span className="search-result--details-price">&euro; 123</span>
          <span className="search-result--details-tax-option">Includes taxes and fees</span>
          <button className="search-result--details-check-btn">See availability</button>
        </div>
      </div>
    </section>
  )
}

export default SearchedResult