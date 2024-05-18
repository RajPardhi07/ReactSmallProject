import { useEffect, useState } from "react"

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

import "./ImageSlider.css"

export default function ImageSlider() {

    const [images, setImages] = useState([])

    // console.log(images[0].images && images)

    const [currentSlide, setCurrentSlide] = useState(0)

    async function fetchImage() {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()


            if (data) {
                setImages(data)
            }

        } catch (error) {
            console.log(error)
        }

    }

    function handlePrevios() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        fetchImage()
    }, [])

    console.log(images)

    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrevios}
                className="arrow arrow-left"

            />
            {/* arr.map((e)=>{
            return (

            )
        }) */}

            {
                images && images.length ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.images}
                        className={
                            currentSlide === index ? "current-image" : "current-image hide-current-image"
                        }
                        alt=""
                    />
                )) : null
            }


            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />

            <span className="circle-indicators">


                {images && images.length ? images.map((_, index) => (

                    <button key={index} className={
                        currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"
                    }
                        onClick={() => setCurrentSlide(index)}

                    >

                    </button>
                )) : null

                }

            </span>





        </div>
    )
}


