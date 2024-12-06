import React from 'react'
import CheckCircle from '../assets/images/icons/check-circle.svg'
import ArrowWhite from '../assets/images/icons/arrow-white.svg'
import Avatar from '../assets/images/icons/faces.png'
import Contact from '../assets/images/icons/contacts.png'
import CreditCard from '../assets/images/icons/creditcard.svg'
import CashBack from '../assets/images/icons/cashback.svg'
import Chart from '../assets/images/icons/chart1345.png'
import CardPetruding from '../assets/images/icons/card-petruding.png'

const BulletPoints = () => {
  return (
    <section className="bullet-points">
        <div className="flex">
            <div className="column-left">
                <h4 className="h2">Make your money transfer simple and clear</h4>
                <div>
                    <img src={CheckCircle}alt="Check circle" />
                    <span className="bullet-text">Banking transactions are free for you</span>
                </div>            
                <div>
                    <img src={CheckCircle} alt="Check circle" />
                    <span className="bullet-text">No monthly cash commission</span>
                </div>            
                <div className="push">
                    <img src={CheckCircle} alt="Check circle" />
                    <span className="bullet-text">Manage payments and transactions online</span>
                </div>
                <a href="#" className="btn btn-primary btn-learn">
                    <span>Learn more</span>
                    <img className="arrow" src={ArrowWhite} alt="A white arrow" />
                </a>
            </div>
            <div className="column-right">
                <img src={Chart} alt="" />
                <img className="avatars" src={Avatar} alt="Avatars" />       
            </div>
        </div>
        <div className="flex row-2">
            <div className="column-left">
                <img src={Contact} alt="Contact" />           
                <img className="img-card" src={CardPetruding} alt="A credit card petruding" />            
            </div>
            <div className="column-2">
                <h4 className="h2">Receive payment from international bank details</h4>
                <div className="flex">
                    <div className="icon-container">
                        <img src={CreditCard} alt="A credit card" />
                        <p className="characters">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="icon-container">
                        <img src={CashBack} alt="Cashback icon" />
                        <p className="characters">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>
        
                <a href="#" className="btn btn-primary btn-learn">
                    <span>Learn more</span>
                    <img className="arrow" src={ArrowWhite} alt="A white arrow" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default BulletPoints