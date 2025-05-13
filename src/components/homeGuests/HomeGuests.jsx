import './HomeGuests.css';

const homeGuests = [
  {
    id: 1,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1',
    name: 'Aparthotel Stare Miasto',
    city: 'OldTown, Krakow, Poland',
    price: '103',
    rating: 8.8,
    review: 'Excellent',
  },
  {
    id: 2,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/579099936.jpg?k=71c2aea7f2dcfb7a75f19b418ee94b4143087eb51885395cd97a29dbee3fa83b&o=&hp=1',
    name: '7Seasons Apartments Budapest',
    city: 'Budapest, Király utca 8., Hungary',
    price: '122',
    rating: 8.8,
    review: 'Excellent',
  },
  {
    id: 3,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/95058973.jpg?k=a061dc2474962409577f55cce44e8bf56df849294da0e1244965e2351ec6683d&o=&hp=1',
    name: 'Oriente Palace Apartments',
    city: 'Madrid City Center, Madrid, Spain',
    price: '254',
    rating: 8.9,
    review: 'Excellent',
  },
  {
    id: 4,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/315744989.jpg?k=c074813273925d0ead05112bc7cb6b2590af2493c59feb1e1aa54df495d68495&o=&hp=1',
    name: 'Numa Florence Vita',
    city: 'Santa Maria Novella, 50129 Florence, Italy',
    price: '164',
    rating: 9.0,
    review: 'Wonderful',
  },
  {
    id: 5,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645063880.jpg?k=0cfecde405689a35c6d7ae600242654d2e23f0d44aa926b5893a4e6dde93d92e&o=&hp=1',
    name: 'Master Cannon',
    city: 'City of London, London, EC4R 0AT, United Kingdom',
    price: '277',
    rating: 9.4,
    review: 'Wonderful',
  },
];

const HomeGuests = () => {
  return (
    <section className="home-guests">
      {homeGuests.map((home) => (
        <article className="property-container" key={home.id}>
          <div className="property-image-container">
            <img src={home.image} alt={home.name} className="property-image" />
          </div>
          <h3 className="property-name">{home.name}</h3>
          <p className="property-city">{home.city}</p>
          <p className="property-price">Starting from &euro; {home.price}</p>
          <div className="property-rating">
            <button>{home.rating}</button>
            <span>{home.review}</span>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomeGuests;
