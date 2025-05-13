import React from 'react'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import './Home.css';
import PropertyList from '../../components/propertyList/PropertyList';
import HomeGuests from '../../components/homeGuests/HomeGuests';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Featured />

        <h2 className="home-title">Browse by property type</h2>
        <PropertyList />
                
        <h2 className="home-title">Accommodations that guests love</h2>
        <HomeGuests />

        <MailList />
        <Footer />
      </main>
    </>
  )
}

export default Home