import { useState } from "react"
import Model from "./Model"

const index = () => {

    const [modelpopup, setModelpopup] = useState(false)

    const submithandler = () => {
        setModelpopup(!modelpopup)
    }



    return (
        <div>
            <button  className="w-40 h-10 rounded-md bg-black text-white" onClick={submithandler}>Open popup model</button>
            { modelpopup && <Model />}
        </div>
    )
}

export default index