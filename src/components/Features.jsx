import React from 'react'
import IphoneCard from '../assets/images/Iphone-card.png'
import CreditCard from '../assets/images/icons/credit-card.svg'
import Shield from '../assets/images/icons/shield.svg'
import Bars from '../assets/images/icons/bars-graphic.svg'
import Wallet from '../assets/images/icons/wallet.svg'
import Vector from '../assets/images/icons/Vector.svg'

const Features = () => {
  return (
    <section className="features">           
        <div className="iphone">
            <img src={IphoneCard} alt="An iphone with a credit card petruding" />
        </div>
    <div className="text-features">
        <h1 className="h1">App Features</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis
            egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
            nec lacus.</p>
        <div className="features-grid">
            <div className="feature-card">
                <div className="icon-container">
                    <img src={CreditCard} alt="A credit card" />
                </div>
                <div>
                    <h3 className="h5">Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src={Shield} alt="A Shield icon" />
                </div>
                <div>
                    <h3 className="h5">Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src={Bars} alt="Horizontal bars" />
                </div>
                <div>
                    <h3 className="h5">Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src={Bars} alt="Horizontal bars" />
                </div>
                <div>
                    <h3 className="h5">Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src={Wallet} alt="A wallet icon" />
                </div>
                <div>
                    <h3 className="h5">Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src={Vector} alt="A card icon" />
                </div>
                <div>
                    <h3 className="h5">Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor
                        arcu.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features