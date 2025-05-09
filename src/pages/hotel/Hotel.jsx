import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

import './Hotel.css'

const hotelImages = [
  { id: 1, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o='},
  { id: 2, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618106.jpg?k=4915ec02da5345d46c01872d2db836eb5b25f65d03e59233fbabd7c106b2704b&o=&hp=1'},
  { id: 3, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618046.jpg?k=62c1b1600750662b16802f12db2350c5dcd3c6585784a8f5003d7e05b14769b8&o=&hp=1'},
  { id: 4, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618181.jpg?k=5bdd53e116b85d7408d5aa9dd81fd6340789d6a12d8f4ffe151a2c74f5a0faaa&o=&hp=1'},
  { id: 5, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618117.jpg?k=1001ce93a6ea7cdec23db4b8ffb9758a3f4268a85adbca72895825320a901f8f&o=&hp=1'},
  { id: 6, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618151.jpg?k=46a86e7b949629ad0481cf67677394bf1c37517631afa324778aa53dbb6cdd48&o=&hp=1'},
  { id: 7, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618209.jpg?k=84cb8b0954c741fcd956244ee5de985a6a7f7b2a7068eaba69388f966f604975&o=&hp=1'},
  { id: 8, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678618391.jpg?k=4b67850003b80407931d1364de205a221acb4d685487d776bb2e80e3fe9527fa&o=&hp=1'},
  { id: 9, src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/678617811.jpg?k=e91a5dfe5ed316ea72ea7a0a617132f554b66ee201bde096fee861add5bb3e51&o=&hp=1'}
]

const Hotel = ({ type }) => {
  return (
    <>
      <Header type="list" />

      <section className="hotel-container">
        <div className="hotel-wrapper">
          <button className="book-now-btn">Reserve or Book Now!</button>
          <h2 className="hotel-title">Lavie Maison Central AC Hot Tub</h2>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 Boulvard Bergers, 750011 Paris</span>
          </div>

          <span className="hotel-distance">500m from center</span>
          <span className="hotel-price-highlight">Book a stay over &euro; 250 at this property and get a free airport taxi</span>

          <div className="hotel-images">
            { hotelImages.map(image => (
              <div className="hotel-image-wrapper" key={image.id}>
                <img src={image.src} alt="hotel image" className='hotel-image' />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details--text">
              <h2 className="hotel-details--title">Stay in the heart of Paris</h2>
              <p className="hotel-details--description">
                Located in a central area of ​​Paris, Lavie Maison Central AC Hot Tub offers a hot tub. 
                Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
                This air-conditioned apartment consists of 3 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
                Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
                Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
                The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.
              </p>
            </div>

            <div className="hotel-details--price">
              <h3>Perfect for 5-night stay!</h3>
              <span>Located in a central area of ​​Paris, this property has an excellent location score of 9.8!</span>

              <h4><strong>&euro; 1250</strong> (5 nights)</h4>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </section>
    </>
  )
}

export default Hotel