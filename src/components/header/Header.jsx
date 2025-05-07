import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../navbar/Navbar'
import './Header.css'
import { faBed, faCableCar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { Children, useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'


// header list items
const listItems = [
    { id: 1, icon: faBed, text: 'Stays', active: true },
    { id: 2, icon: faPlane, text: 'Flights', active: false },
    { id: 3, icon: faCar, text: 'Car rentals', active: false },
    { id: 4, icon: faCableCar, text: 'Attractions', active: false },
    { id: 5, icon: faTaxi, text: 'Airport taxis', active: false }
];

const Header = ({type}) => {
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    return (
        <header>
            <Navbar />
            <section className="hero-section">
                <div className={ type === 'list' ? "hero-container list-mode" : "hero-container"}>
                    <div className="hero-list">
                        {listItems.map(item => (
                            <div className={item.active ? "hero-list-item active" : "hero-list-item"} key={item.id}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    { type !== 'list' && 
                        <section>
                        <h2 className="hero-title">Find your next stay</h2>
                        <p className="hero-text">
                            Search for deals on hotels, self-catering accommodations with a free BibiBooking account
                        </p>

                        <button className="hero-btn">Sign in / Register</button>

                        <div className="hero-search">
                            <div className="hero-search-item">
                                <FontAwesomeIcon icon={faBed} className='hero-icon' />
                                <input type="text" placeholder='Where are you going?' className='hero-search-input' />
                            </div>

                            <div className="hero-search-item">
                                <FontAwesomeIcon icon={faCalendarDays} className='hero-icon' />
                                <span onClick={() => { setIsDateOpen(!isDateOpen); setIsOptionsOpen(false) }} className="hero-search-text">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {isDateOpen && <DateRange
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    onChange={item => setDate([item.selection])}
                                    className='date'
                                />}
                            </div>

                            <div className="hero-search-item">
                                <FontAwesomeIcon icon={faPerson} className='hero-icon' />
                                <span onClick={() => { setIsOptionsOpen(!isOptionsOpen); setIsDateOpen(false) }} className="hero-search-text">{`${options.adult} - Adult | ${options.children} - Children | ${options.room} - Room `}</span>

                                {isOptionsOpen && <div className="options">
                                    <div className="option-item">
                                        <div className="option-text">Adult</div>
                                        <div className="option-counter">
                                            <button disabled={options.adult <= 1} className="option-counter-btn" onClick={() => handleOption('adult', 'decrement')}>-</button>
                                            <span className="option-counter-number">{options.adult}</span>
                                            <button className="option-counter-btn" onClick={() => handleOption('adult', 'increment')}>+</button>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <div className="option-text">Children</div>
                                        <div className="option-counter">
                                            <button disabled={options.children <= 0} className="option-counter-btn" onClick={() => handleOption('children', 'decrement')}>-</button>
                                            <span className="option-counter-number">{options.children}</span>
                                            <button className="option-counter-btn" onClick={() => handleOption('children', 'increment')}>+</button>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <div className="option-text">Room</div>
                                        <div className="option-counter">
                                            <button disabled={options.room <= 1} className="option-counter-btn" onClick={() => handleOption('room', 'decrement')}>-</button>
                                            <span className="option-counter-number">{options.room}</span>
                                            <button className="option-counter-btn" onClick={() => handleOption('room', 'increment')}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="hero-search-item">
                                <button className="hero-btn">Search</button>
                            </div>
                        </div>
                        </section>
                    }
                    
                </div>
            </section>
        </header>
    )
}

export default Header