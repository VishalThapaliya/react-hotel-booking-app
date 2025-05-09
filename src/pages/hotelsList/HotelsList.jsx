import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './HotelsList.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchedResult from '../../components/searchedResult/SearchedResult'

const HotelsList = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)

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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={item => setDate([item.section])}
                minDate={new Date()}
                ranges={date}
              />}
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
                  <span className="list-search-option--text">
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} className="list-search-option--input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option--text">
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} className="list-search-option--input" />
                </div>

              </div>
            </div>
            
            <button>Search</button>
          </div>

          <div className="list-result">
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
            <SearchedResult />
          </div>
        </div>
      </section>
    </>
  )
}

export default HotelsList