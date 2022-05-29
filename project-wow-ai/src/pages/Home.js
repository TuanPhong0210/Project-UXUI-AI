import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import AboutUs from '../components/home/AboutUs';
import Services from '../components/home/Services';
import SlideHome from '../components/home/SlideHome';

const Home = () => {
  return (
    <div>
      <SlideHome />
      <div style={{
        background: "var(--primary-bg)",
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src='/images/scrollarrow.png' alt='scroll'/>
      </div>

      <AboutUs />
      <div style={{
        background: "var(--primary-bg)",
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src='/images/scrollarrow.png' alt='scroll'/>
      </div>
      <Services/>
    </div>
  )
}

export default Home

