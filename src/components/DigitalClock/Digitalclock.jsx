
import { useEffect, useState } from "react"


const Digitalclock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return() => {
            clearInterval(intervalId)
        }
    }, [])

  return (
    <div className="w-100 h-screen bg-emerald-600 flex items-center justify-center">
        <div className="bg-black rounded-md text-purple-800 flex items-center flex-col w-96 h-80">
        <h1 className="text-[3vw] mt-8 font-bold">Digitalclock</h1>
            <div className="text-[3vw] mt-3 text-rose-600">
                <span>{time.getHours().toString().padStart(2, "0")}:</span>
                <span>{time.getMinutes().toString().padStart(2, "0")}:</span>
                <span>{time.getSeconds().toString().padStart(2, "0")}</span>

            </div>

            <div className="text-[2vw] mt-5 font-semibold">
                 {time.toLocaleDateString(undefined, {
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric",
                 })}
                 
            </div>

        </div>
    </div>
  )
}

export default Digitalclock