import React from 'react'
import PhoneLeft from '../assets/images/phone-left.png'
import PhoneClear from '../assets/images/phone-clear.png'
import PhoneRight from '../assets/images/phone-right.png'

const Carousel = () => {
  return (
    <section className="carousel-section">                       
    <h2 className="h1 text">How Does It Work?</h2>
    <div className="carousel">
        <div className="carousel-item">
            <img src={PhoneLeft} alt="A mobilephone tilted to the left" />
        </div>                    
        <div className="carousel-item">
            <img src={PhoneClear} alt="A mobilephone visually clerer than the other phones" />
        </div>                        
        <div className="carousel-item">
            <img src={PhoneRight} alt="A mobilephone tilted to the right" />
        </div>
    </div>
    <div className="text">
        <h3 className="h4">Latest transaction history</h3>
        <p className="text-spacing">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique
            quisque hac in consectetur condimentum.
        </p>
    </div>                
</section>
  )
}

export default Carousel