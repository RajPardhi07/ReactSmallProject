import { useState } from "react"
import QRCode from "react-qr-code"

const QRcode = () => {

    const [qrcode, setQrcode] = useState('')
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        setQrcode(input)
        setInput('')

    }


  return (
    <div>
        <div>
            <input className="w-30 h-11 border border-black mt-3 mb-3" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your Text"/>
            <button className="bg-black text-white ml-5"  onClick={handleSubmit}>Generate</button>
        </div>

        <div>
            <QRCode
            value={qrcode}
            id="qr-code-value"

            size={300}
            className="bg-gray-300"

            />
        </div>
    </div>
  )
}

export default QRcode