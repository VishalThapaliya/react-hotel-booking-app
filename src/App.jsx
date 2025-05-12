import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Home from './pages/home/Home';
import HotelsList from './pages/hotelsList/HotelsList';
import Hotel from './pages/hotel/hotel';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/hotels' element={ <HotelsList /> }></Route>
          <Route path='/hotels/:id' element={ <Hotel /> }></Route>
        </Routes>
      </Router>      
    </>
  )
}

export default App
