import React from 'react'
import StarRating from './StarRating'
import Quotes from '../assets/images/icons/quotes.svg'

const Testimonial = ({item}) => {
  return (
        <div className="card-2">
        <div className="quotes">            
            <img src={Quotes} alt="Quote icon" />
        </div>
        <StarRating starRating={item.starRating} />
            <p className="albert-review">{item.comment}</p>
            <img src={item.avatarUrl} alt={item.author} />
            <p className="author-a">{item.author}</p>
            <p className="c">{item.jobRole}</p>
        </div>
    )
}

export default Testimonial