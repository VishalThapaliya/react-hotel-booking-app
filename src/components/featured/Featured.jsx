import React from 'react'
import './Featured.css'

const featuredList = [
    {
        id: 1,
        image: 'https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg',
        title: 'Paris',
        properties: '22,317'
    },
    {
        id: 2,
        image: 'https://ecenglish.com/en/wp-content/uploads/sites/4/2025/01/Dublin-bridge-dusk.jpg',
        title: 'Dublin',
        properties: '22,317'
    },
    {
        id: 3,
        image: 'https://www.visitlondon.com/-/media/images/london/visit/general-london/london-panoramic-1280x720.jpg?rev=7c120e60feb14b52be2d1cfb71f54d25&mw=800&hash=E5BAE754E72DDA45F26625BAA7BE6678',
        title: 'London',
        properties: '22,317'
    },
    {
        id: 4,
        image: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg',
        title: 'New York',
        properties: '22,317'
    },
    {
        id: 5,
        image: 'https://www.marveladventure.com/uploads/editors/Kathmandu-City-Tour.jpg',
        title: 'Kathmandu',
        properties: '22,317'
    },
    {
        id: 6,
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0c/de/66/caption.jpg?w=1200&h=1600&s=1',
        title: 'Maldives',
        properties: '22,317'
    }    
]

const Featured = () => {
  return (
    <section className="featured">
        { featuredList.map(item => (
            <div className="featured-item" key={item.id}>
                <img src={item.image} alt={item.title} className='featured-image'/>

                <div className="featured-title">
                    <h2>{item.title}</h2>
                    <h3>{item.properties}</h3>
                </div>
            </div>
        ))}
        
    </section>
  )
}

export default Featured