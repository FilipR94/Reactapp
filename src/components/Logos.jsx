import React from 'react'
import Logoipsum1 from '../assets/images/logos/logoipsum 1.svg'
import Logoipsum2 from '../assets/images/logos/logoipsum 2.svg'
import Logoipsum3 from '../assets/images/logos/logoipsum 3.svg'
import Logoipsum4 from '../assets/images/logos/logoipsum 4.svg'
import Logoipsum5 from '../assets/images/logos/logoipsum 5.svg'
import Logoipsum6 from '../assets/images/logos/logoipsum 6.svg'


const Logos = () => {
return (

    <section className="logos">            
        <div className="logo-card">
            <img src={Logoipsum1} alt="Logoipsum" />
        </div>
        <div className="logo-card">
            <img src={Logoipsum2} alt="Logoipsum" />
        </div>
            <div className="logo-card">
            <img src={Logoipsum3} alt="Logoipsum" />
        </div>
        <div className="logo-card">
            <img src={Logoipsum4} alt="Logoipsum" />
        </div>
         <div className="logo-card">
            <img src={Logoipsum5} alt="Logoipsum" />
         </div>
        <div className="logo-card">
            <img src={Logoipsum6} alt="Logoipsum" />
        </div>
    </section>
)}


export default Logos