import React, {useState, useEffect} from 'react'

import Testimonial from './Testimonial'

const ClientTestimonials = () => {

  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = async () => {
  const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
  const data = await res.json()
  setTestimonials(data)
  }
  
  useEffect(() => {
    getTestimonials()
  }, [])
 
  return (
    <section id="Testimonials" className="Testimonials">
          <div className="flex">
            <h4 className="h1 flex headline-left">Clients are Loving Our App</h4>
            <div className="cards flex">
            <div className="quotes">
            
          </div>
            {
              testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} item={testimonial} />
            ))
          }  

      
      </div>
      </div>        
    </section>
    )
  }

export default ClientTestimonials