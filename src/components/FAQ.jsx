import React from 'react'
import Telephone from '../assets/images/icons/telephone.svg'
import ArrowBlue from '../assets/images/icons/arrow-blue.svg'
import Message from '../assets/images/icons/message.svg'
import ArrowGreen from '../assets/images/icons/arrow-green.svg'
import Accordion from './Accordion'


const FAQ = () => {
  return (
    <section>
        <div className="container-f">        
            <div id="faq">
            <div>
                <h4 className="h2">Any questions? Check out the FAQs</h4>
        </div>
    <div className="questionmark">
        <p>Still have unanswered questions and need to get in touch?</p>
    </div>
    <div className="flex contactboxes">       
    <div className="contact-box">
        <img src={Telephone} alt="A phone" />
        <p className="clr">Still have questions?</p>
        <div className="contact-link">
        <a href="">Contact us</a>
        <img src={ArrowBlue} alt="A blue arrow" />
        </div>
    </div>
    <div className="contact-box">
        <img src={Message} alt="Message icon" />
        <p className="clr">Don't like phone calls?</p>
        <div className="contact-link">
        <a href="">Contact us</a>
        <img src={ArrowGreen} alt="A green arrow" />
        </div>

    </div>
    </div>
    </div>    
        <Accordion /> 
</div>
</section>
  )
}

export default FAQ