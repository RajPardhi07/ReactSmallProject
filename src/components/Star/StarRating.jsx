import { useState } from "react";
import { ImStarFull } from "react-icons/im";

import "./styles.css"


const StarRating = ({noOfStar= 8}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)


const handleClick = (getCurrentId) => {

    setRating(getCurrentId)
}

const handleMouseMove = (getCurrentId) => {
    setHover(getCurrentId)
}

const handleMouseLeave = () => {
    setRating(rating)
}




  return <div className="flex gap-6">
    {
        [...Array(noOfStar)].map((_, index) => {

            index += 1

            return <ImStarFull
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={60}

            />

        })
    }
  </div>
}

export default StarRating