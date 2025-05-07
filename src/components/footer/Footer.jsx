import './Footer.css'

const citiesInYourCountry = [
    {
        id: 1,
        name: 'Paris'
    },
    {
        id: 2,
        name: 'Strasbourg'
    },
    {
        id: 3,
        name: 'Lyon'
    },
    {
        id: 4,
        name: 'Grenoble'
    },
    {
        id: 5,
        name: 'Bordeaux'
    },
    {
        id: 6,
        name: 'Toulous'
    },
    {
        id: 7,
        name: 'Cannes'
    },
    {
        id: 8,
        name: 'Lille'
    }
]

const citiesInTheWorld = [
    {
        id: 1,
        city: 'London',
        country: 'United Kingdom'
    },
    {
        id: 2,
        city: 'Barcelona',
        country: 'Spain'
    },
    {
        id: 3,
        city: 'Kathmandu',
        country: 'Nepal'
    },
    {
        id: 4,
        city: 'Tokyo',
        country: 'Japan'
    },
    {
        id: 5,
        city: 'Rome',
        country: 'Italy'
    },
    {
        id: 6,
        city: 'Lisbon',
        country: 'Portugal'
    },
    {
        id: 7,
        city: 'Amsterdam',
        country: 'The Netherlands'
    },
    {
        id: 8,
        city: 'New York',
        country: 'United STATES'
    }
]

const regions = [
    {
        id: 1,
        city: 'Paris'
    },
    {
        id: 2,
        city: 'Bali'
    },
    {
        id: 3,
        city: 'Ibiza'
    },
    {
        id: 4,
        city: 'Corsica'
    },
    {
        id: 5,
        city: 'Normandy'
    },
    {
        id: 6,
        city: 'Island of Majorca'
    },
    {
        id: 7,
        city: 'Île-de-France'
    },
    {
        id: 8,
        city: 'Santorini'
    }
]

const countries = [
    {
        id: 1,
        country: 'United Kingdom'
    },
    {
        id: 2,
        country: 'Spain'
    },
    {
        id: 3,
        country: 'Nepal'
    },
    {
        id: 4,
        country: 'Japan'
    },
    {
        id: 5,
        country: 'Italy'
    },
    {
        id: 6,
        country: 'Portugal'
    },
    {
        id: 7,
        country: 'The Netherlands'
    },
    {
        id: 8,
        country: 'United STATES'
    }
]

const accomodations = [
    {
        id: 1,
        type: 'Apartments'
    },
    {
        id: 2,
        type: 'Hotels with parking'
    },
    {
        id: 3,
        type: 'Cheap hotels'
    },
    {
        id: 4,
        type: 'Luxury Hotels'
    },
    {
        id: 5,
        type: 'Aparthotels'
    },
    {
        id: 6,
        type: 'Villas'
    },
    {
        id: 7,
        type: 'Homestays'
    },
    {
        id: 8,
        type: 'Spa hotels'
    }
]


const Footer = () => {
    return (
        <footer>
            <div className="footer-lists">

                {/* cities in your country */}
                <div className='footer-category'>
                    <h4>Cities in your country</h4>
                    <ul className="list">
                        {citiesInYourCountry.map(city => (
                            <li className="list-item" key={city.id}>Hotels in {city.name}</li>
                        ))}
                    </ul>
                </div>


                {/* cities in the world */}
                <div className='footer-category'>
                    <h4>Cities in the world</h4>
                    <ul className="list">
                        {citiesInTheWorld.map(city => (
                            <li className="list-item" key={city.id}>
                                <span>Hotels in {city.city}</span>
                                <p>{city.country}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* regions */}
                <div className='footer-category'>
                    <h4>Regions</h4>
                    <ul className="list">
                        {regions.map(region => (
                            <li className="list-item" key={region.id}>{region.city}</li>
                        ))}
                    </ul>
                </div>

                {/* countries */}
                <div className='footer-category'>
                    <h4>Country</h4>
                    <ul className="list">
                        {countries.map(country => (
                            <li className="list-item" key={country.id}>{country.country}</li>
                        ))}
                    </ul>
                </div>

                {/* accomodations */}
                <div className='footer-category'>
                    <h4>Accomodations</h4>
                    <ul className="list">
                        {accomodations.map(accomodation => (
                            <li className="list-item" key={accomodation.id}>{accomodation.type}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="footer-text">Copyright © 2025 Bibibooking.com™. All rights reserved.</div>
        </footer>
    )
}

export default Footer