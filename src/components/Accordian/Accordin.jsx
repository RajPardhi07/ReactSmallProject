import { useState } from 'react'
import data from './data'

const Accordin = () => {

    const [selected, setSelected] = useState(null)

    const handlesubmit = (getCurrentId) => {
         
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }


  return <div>
    <div>
        {
            data && data.length > 0 ? (
                <div>
                    {data.map((dataItem, id) => (
                        <div key={id}>
                            <div onClick={() => handlesubmit(dataItem.id)}>
                                {dataItem.question}
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? <div>
                                    {dataItem.answer}
                                </div> : null
                            }
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                <h1>data not found</h1>
                </div>
            )
        }
    </div>
  </div>
}

export default Accordin