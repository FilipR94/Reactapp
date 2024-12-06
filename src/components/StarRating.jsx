import React from 'react'

const StarRating = ({starRating}) => {
  
  const maxStars = 5
  const filledStars = Math.min(starRating, maxStars)
  const emptyStars = maxStars - filledStars
  
    return (
      <div className="stars">

        {
          [...Array(filledStars)].map((_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))
        }
        {
          [...Array(emptyStars)].map((_, index) => (
            <i key={index} className="fa-thin fa-star"></i>
          ))
        } 
      </div>    
    )
}

export default StarRating