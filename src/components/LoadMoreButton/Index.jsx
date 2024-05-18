import { useEffect } from "react"
import { useState } from "react"




const Index = () => {

    const [images, setImages] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)



    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json()

            // console.log(data)
            setImages((prevData) => [...prevData, ...data.products])

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchData()
    }, [count])

    useEffect(() => {
        if (images && images.length === 100) setDisableButton(true)
    }, [images])

    // console.log(images)

    return <div className="flex flex-col gap-20">
        <div className="grid gap-4 grid-cols-3 grid-rows-3 ">

            {
                images && images.length ?
                    images.map(imageItem =>
                        <div className="h-[400px] border-2 border-slate-600" key={imageItem.id}>
                            <img className="h-[300px] object-cover" src={imageItem.thumbnail} alt="" />
                            <h3 className="text-red-500">{imageItem.category}</h3>
                            <h4>{imageItem.title}</h4>
                            <p>{imageItem.price}</p>

                        </div>

                    )
                    : null
            }
        </div>

        <div className="button-container">
            <button className="ml-[30vw] px-[30px] font-bold text-[18px] py-[10px] bg-green-400"
             disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Product</button>
              {disableButton ? <p>You have reached 100 products</p> : null}
        </div>

    </div>
}
 
export default Index