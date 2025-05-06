import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../navbar/Navbar'
import './Header.css'
import { faBed, faCableCar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'


// header list items
const listItems = [
    { id: 1, icon: faBed, text: 'Stays', active: true},
    { id: 2, icon: faPlane, text: 'Flights', active: false },
    { id: 3, icon: faCar, text: 'Car rentals', active: false },
    { id: 4, icon: faCableCar, text: 'Attractions', active: false },
    { id: 5, icon: faTaxi, text: 'Airport taxis', active: false }
];

const Header = () => {
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [date, setDate] = useState([
        { startDate: new Date(), endDate: new Date(), key: 'selection' }
    ]);
    const [showPersons, setShowPersons] = useState(false);
    const personOptions = ['adult', 'children', 'room'];
    const [personCounts, setPersonCounts] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const personsRef = useRef(null);

    // Close the room selection div when clicking outside
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if(personsRef.current && !personsRef.current.contains(event.target)) {
                setShowPersons(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        }
    }, []);


    const handleDateClick = () => {
        setIsDateOpen(!isDateOpen);
    }

    const handleIncrement = (type) => {
        setPersonCounts(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    const handleDecrement = (type) => {
        setPersonCounts(prev => ({
            ...prev,
            [type]: type === 'adult' || type === 'room' ? Math.max(1, prev[type] - 1) : Math.max(0, prev[type] - 1)
        }));
    };

    return (
        <header>
            <Navbar />
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-list">
                        {listItems.map(item => (
                            <div className={ item.active ? "hero-list-item active" : "hero-list-item"} key={item.id}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="hero-title">Find your next stay</h2>
                    <p className="hero-text">
                        Search for deals on hotels, self-catering accommodations with a free BibiBooking account
                    </p>

                    <button className="hero-btn">Sign in / Register</button>

                    <div className="hero-search">
                        <div className="hero-search-item">
                            <FontAwesomeIcon icon={faBed} className='hero-icon' />
                            <input type="text" placeholder='Where are you going?' className='hero-search-input'/>
                        </div>

                        <div className="hero-search-item" onClick={handleDateClick}>
                            <FontAwesomeIcon icon={faCalendarDays} className='hero-icon' />
                            <span className="hero-search-text">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            { isDateOpen && <DateRange 
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />}
                        </div>

                        <div className="hero-search-item" onClick={() => setShowPersons(!showPersons)}>
                            <FontAwesomeIcon icon={faPerson} className='hero-icon' />
                            <span className="hero-search-text">{ `${personCounts.adult} Adult - ${personCounts.children} Children - ${personCounts.room} Room` }</span>
                            
                            { showPersons && 
                                <div className="persons" ref={personsRef}>
                                    {personOptions.map((type) => (
                                        <div className="persons-item" key={type}>
                                            <span className="persons-text">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                            <div className="person-counter">
                                                <button className="person-counter-btn" onClick={() => handleDecrement(type)}>-</button>
                                                <span className="person-counter-number">{personCounts[type]}</span>
                                                <button className="person-counter-btn" onClick={() => handleIncrement(type)}>+</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="close-btn" onClick={() => setShowPersons(false)}>Close</button>
                                </div>
                            }
                        </div>

                        <div className="hero-search-item">
                            <button className="hero-btn">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header