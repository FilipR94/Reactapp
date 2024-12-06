import React, { useState } from 'react'
import Bell from '../assets/images/icons/bell.svg'
import Letter from '../assets/images/icons/letter-small.svg'


const Newsletter = () => {
    const [formData, setFormData] = useState({email: ''})
    const [errors, setErrors] = useState({})

    const validateField = (name, value) => {
        let error = ''

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "Must be a valid email address."
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
    }

    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email address."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        validateField(name, value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const isValid = validateForm()        
        if (isValid) {
            console.log('Form is valid')
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
        }
        else {
            console.log('Form is invalid')
        }            
    }   
  return (
        <form onSubmit={handleSubmit} noValidate>
            <div id="newsletter">
                <div className="flex bell-img">         
                    <img className="bell" src={Bell} alt="Bell icon" />
                    <h2>Subscribe to our newsletter to stay informed about latest updates</h2> 
                </div>        
            <div className="input-container">
                <div>            
                    <div className="form-group">
                    <input className="input-c" type="email" name="email" placeholder="Your Email" aria-label="Email address" value={formData.email} onChange={handleChange} required />
                    <img src={Letter} alt="Envelope icon" className="envelope-icon" />
                    <button type="submit" className="style" aria-label="Subscribe to newsletter">Subscribe</button>
                    </div>
                    {errors.email && <span className="validation-errors"> {errors.email}</span>}
                </div>
            </div>
            </div>
        </form>
    )
}

export default Newsletter