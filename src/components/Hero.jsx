import React from 'react'
import AppstoreLogo from '../assets/images/icons/appstore-light.svg'
import GoogleLogo from '../assets/images/icons/googleplay-light.svg'
import Iphones from '../assets/images/phones.svg'


const Hero = () => {
  return (    
    <section className="hero">
        <div>
            <h2 className="d-4">Manage All Your Money in One App</h2>           
            <p className="text-lg text-2">We offer you a new generation of the mobile banking.</p>               
            <p className="text-lg text-2">Save, spend & manage money in your pocket.</p>                
        <div className="market-btns">
            <a href="#" className="store-btn">
                <span className="sr-only">Download on App Store</span>
                <img src={AppstoreLogo} alt="App Store Logo"/>       
            </a>                        
            <a href="#" className="store-btn">
                <span className="sr-only">Get it on Google Play</span>
                <img src={GoogleLogo} alt="Google Play Logo" />
            </a>               
            </div>        
            <div className="more">
                <a href="#features" className="btn-round btn-white">
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
            <span>Discover more</span>
            </div>
        </div>
        <img src={Iphones} alt="Iphones" />
    </section>
)
}

export default Hero