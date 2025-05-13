import './PropertyList.css';

const propertyList = [
  {
    id: 1,
    image:
      'https://www.orient-express.com/wp-content/uploads/2024/12/JUNIOR-SUITE_209_-Bedroom-scaled.jpg',
    title: 'Hotels',
    properties: '233 Hotels',
  },
  {
    id: 2,
    image:
      'https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU',
    title: 'Apartments',
    properties: '233 Apartments',
  },
  {
    id: 3,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465800942.jpg?k=31656bd330d043f9575883b3b35c29095693af4303c7d363934b3805b2bfe0aa&o=&hp=1',
    title: 'Hostels',
    properties: '233 Hostels',
  },
  {
    id: 4,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1',
    title: 'Villas',
    properties: '233 Villas',
  },
  {
    id: 5,
    image:
      'https://dogfriendlydestinations.com/wp-content/uploads/Undercastle-Cottage-22.png',
    title: 'Cottages',
    properties: '233 Cottages',
  },
  {
    id: 6,
    image: 'https://www.interhome.group/upload/8411/HR6400-250-1.jpg',
    title: 'Holiday Homes',
    properties: '233 Holiday homes',
  },
  {
    id: 7,
    image:
      'https://www.lakdi.com/cdn/shop/articles/guest_bedroom_furniture_ideas.jpg?v=1657522499&width=1920',
    title: 'Guest Houses',
    properties: '233 Guest Houses',
  },
];

const PropertyList = () => {
  return (
    <section className="property-list">
      {propertyList.map((property) => (
        <article className="property-list-item" key={property.id}>
          <img className="property-image" src={property.image} alt={property.title} />
          <div className="property-title">
            <h2>{property.title}</h2>
            <h3>{property.properties}</h3>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PropertyList;
