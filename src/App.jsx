import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/home/Home';
import HotelsList from './pages/hotelsList/HotelsList';
import Hotel from './pages/hotel/Hotel';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/hotels' element={ <HotelsList /> } />
        <Route path='/hotels/:id' element={ <Hotel /> } />
      </Routes>
    </Router>      
  )
}

export default App