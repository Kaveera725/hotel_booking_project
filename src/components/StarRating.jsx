import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating = 4}) => {
  return (
    <div>
          {Array(5).fill(0).map((_, index) => (
                                <img src={rating > index ?  assets.starIconFilled : assets.starIconOutlined} alt='star icon' key={index} className='h-4.5 w-4.5 inline-block' />
                            ))}
    </div>
  )
}

export default StarRating
