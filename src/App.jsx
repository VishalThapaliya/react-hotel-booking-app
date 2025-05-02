import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Home from './pages/home/Home';
import HotelsList from './pages/hotelsList/HotelsList';
import Hotel from './pages/hotel/hotel';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/hotels' element={ <HotelsList /> }></Route>
          <Route path='/hotels/:id' element={ <Hotel /> }></Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
