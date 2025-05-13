import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../navbar/Navbar';
import './Header.css';
import { faBed, faCableCar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const listItems = [
    { id: 1, icon: faBed, text: 'Stays', active: true },
    { id: 2, icon: faPlane, text: 'Flights' },
    { id: 3, icon: faCar, text: 'Car rentals' },
    { id: 4, icon: faCableCar, text: 'Attractions' },
    { id: 5, icon: faTaxi, text: 'Airport taxis' },
];

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
        }));
    };

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    };

    return (
        <header>
            <Navbar />
            <section className="hero-section">
                <div className={`hero-container ${type === 'list' ? 'list-mode' : ''}`}>
                    <div className="hero-list">
                        {listItems.map((item) => (
                            <div key={item.id} className={`hero-list-item ${item.active ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {type !== 'list' && (
                        <section>
                            <h2 className="hero-title">Find your next stay</h2>
                            <p className="hero-text">Search for deals on hotels, self-catering accommodations with a free BibiBooking account</p>
                            <button className="hero-btn">Sign in / Register</button>

                            <div className="hero-search">
                                <div className="hero-search-item">
                                    <FontAwesomeIcon icon={faBed} className="hero-icon" />
                                    <input
                                        type="text"
                                        placeholder="Where are you going?"
                                        className="hero-search-input"
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>

                                <div className="hero-search-item">
                                    <FontAwesomeIcon icon={faCalendarDays} className="hero-icon" />
                                    <span onClick={() => { setIsDateOpen(!isDateOpen); setIsOptionsOpen(false); }} className="hero-search-text">
                                        {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                                    </span>
                                    {isDateOpen && (
                                        <DateRange
                                            editableDateInputs
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            onChange={(item) => setDate([item.selection])}
                                            className="date"
                                            minDate={new Date()}
                                        />
                                    )}
                                </div>

                                <div className="hero-search-item">
                                    <FontAwesomeIcon icon={faPerson} className="hero-icon" />
                                    <span onClick={() => { setIsOptionsOpen(!isOptionsOpen); setIsDateOpen(false); }} className="hero-search-text">
                                        {`${options.adult} - Adult | ${options.children} - Children | ${options.room} - Room`}
                                    </span>

                                    {isOptionsOpen && (
                                        <div className="options">
                                            {['adult', 'children', 'room'].map((opt) => (
                                                <div className="option-item" key={opt}>
                                                    <div className="option-text">{opt.charAt(0).toUpperCase() + opt.slice(1)}</div>
                                                    <div className="option-counter">
                                                        <button
                                                            disabled={options[opt] <= (opt === 'adult' || opt === 'room' ? 1 : 0)}
                                                            className="option-counter-btn"
                                                            onClick={() => handleOption(opt, 'decrement')}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="option-counter-number">{options[opt]}</span>
                                                        <button className="option-counter-btn" onClick={() => handleOption(opt, 'increment')}>
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="hero-search-item">
                                    <button className="hero-btn" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </header>
    );
};

export default Header;
