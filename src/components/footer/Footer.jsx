import './Footer.css';

const Footer = () => {
    const footerSections = [
        {
            title: 'Cities in your country',
            items: [
                'Paris', 'Strasbourg', 'Lyon', 'Grenoble',
                'Bordeaux', 'Toulous', 'Cannes', 'Lille'
            ],
            render: (item) => `Hotels in ${item}`,
        },
        {
            title: 'Cities in the world',
            items: [
                { city: 'London', country: 'United Kingdom' },
                { city: 'Barcelona', country: 'Spain' },
                { city: 'Kathmandu', country: 'Nepal' },
                { city: 'Tokyo', country: 'Japan' },
                { city: 'Rome', country: 'Italy' },
                { city: 'Lisbon', country: 'Portugal' },
                { city: 'Amsterdam', country: 'The Netherlands' },
                { city: 'New York', country: 'United STATES' },
            ],
            render: (item) => (
                <>
                    <span>Hotels in {item.city}</span>
                    <p>{item.country}</p>
                </>
            ),
        },
        {
            title: 'Regions',
            items: [
                'Paris', 'Bali', 'Ibiza', 'Corsica',
                'Normandy', 'Island of Majorca',
                'Île-de-France', 'Santorini'
            ],
        },
        {
            title: 'Country',
            items: [
                'United Kingdom', 'Spain', 'Nepal', 'Japan',
                'Italy', 'Portugal', 'The Netherlands', 'United STATES'
            ],
        },
        {
            title: 'Accommodations',
            items: [
                'Apartments', 'Hotels with parking', 'Cheap hotels',
                'Luxury Hotels', 'Aparthotels', 'Villas',
                'Homestays', 'Spa hotels'
            ],
        },
    ];

    return (
        <footer className="footer">
            <div className="footer-lists">
                {footerSections.map((section, index) => (
                    <div className="footer-category" key={index}>
                        <h4>{section.title}</h4>
                        <ul className="list">
                            {section.items.map((item, idx) => (
                                <li className="list-item" key={idx}>
                                    {section.render ? section.render(item) : item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-text">© 2025 Bibibooking.com™. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
