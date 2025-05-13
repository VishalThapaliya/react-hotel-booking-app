import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './HotelsList.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchedResult from '../../components/searchedResult/SearchedResult';

// Dummy hotels data for listing
const hotels = [
  {
    id: '1',
    name: 'Lavie Maison Central AC Hot Tub',
    location: '123 Avenue de la liberation, 750013 Paris',
    distance: '500m from center',
    featureTitle: 'Apartment with 3 deluxe rooms',
    features: '4 Beds (3 beds + 1 sofa-bed) - 1 living room - 2 bathrooms',
    price: 175,
    ranking: 'Superb',
    rating: 8.9,
    description: `Located in a central area of ​​Paris, Lavie Maison Central AC Hot Tub offers a hot tub. 
      Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
      This air-conditioned apartment consists of 3 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
      Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
      Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
      The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.`
  },
  {
    id: '2',
    name: 'Hotel Radisson',
    location: '4, Rue des Berger, 750011 Paris',
    distance: '50m from center',
    featureTitle: 'Hotel with 5 stars',
    features: '6 Beds (3 beds + 1 sofa-bed) - 1 living room - 3 bathrooms',
    price: 675,
    ranking: 'Excellent',
    rating: 9.0,
    description: `Located in a central area of ​​Paris, Hotel Radisson offers luxury hotel service in the city of lights. 
      Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
      This air-conditioned apartment consists of 6 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
      Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
      Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
      The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.` },
  {
    id: '3',
    name: 'Hotel Plaza',
    location: '32 Rue Gustave Eiffel, 750009 Paris',
    distance: '250m from center',
    featureTitle: 'Hotel with royal services',
    features: '3 Beds (3 beds + 1 sofa-bed) - 1 living room - 2 bathrooms',
    price: 375,
    ranking: 'Superb',
    rating: 8.2,
    description: `Located in a central area of ​​Paris, Hotel Plaza offers a magnificient view of the Eiffel tower from its premises. 
      Free WiFi is available throughout the property and the property is 10 meters from the Pompidou Center. 
      This air-conditioned apartment consists of 100 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
      Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
      Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
      The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.` },
  {
    id: '4',
    name: 'Luxury Stay Inn',
    location: '5 Cours de Etoile, 750001 Paris',
    distance: '10m from center',
    featureTitle: 'Villa with honeymoon rooms for couples',
    features: '5 Beds (3 beds + 1 sofa-bed) - 1 living room - 3 bathrooms',
    price: 550,
    ranking: 'Excellent',
    rating: 9.5,
    description: `Located in a central area of ​​Paris, Luxury Stay Inn offers a luxury villa for the couples and the honeymoon planners. 
      Free WiFi is available throughout the property and the property is 800 meters from the Pompidou Center. 
      This air-conditioned apartment consists of 3 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. 
      Towels and bed linen are available. Speaking English and French, staff at the 24-hour front desk can help you plan your stay. Lavie Maison Central AC Hot Tub offers a hot tub. 
      Popular points of interest near the accommodation include Notre Dame Cathedral, Opéra Bastille, and Sainte-Chapelle. 
      The nearest airport is Paris - Orly Airport, 18 km from the accommodation, and the property offers a paid airport shuttle service.`
  },
];

const HotelsList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const handleSeeAvailability = (hotel) => {
    navigate(`/hotels/${hotel.id}`, { state: hotel });
  };

  return (
    <>
      <Header type="list" />

      <section className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h2 className="list-title">Search</h2>

            <div className="list-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="list-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="list-item">
              <label>Options</label>
              <div className="list-options">
                <div className="list-search-option-item">
                  <span className="list-search-option--text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">Children</span>
                  <input type="number" min={0} placeholder={options.children} className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">Room</span>
                  <input type="number" min={1} placeholder={options.room} className="list-search-option--input" />
                </div>
              </div>
            </div>

            <button>Search</button>
          </div>

          <div className="list-result">
            {hotels.map((hotel) => (
              <SearchedResult
                key={hotel.id}
                name={hotel.name}
                location={hotel.location}
                distance={hotel.distance}
                featureTitle={hotel.featureTitle}
                features={hotel.features}
                price={hotel.price}
                ranking={hotel.ranking}
                rating={hotel.rating}
                description={hotel.description}
                id={hotel.id}
                onClick={() => handleSeeAvailability(hotel)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelsList;