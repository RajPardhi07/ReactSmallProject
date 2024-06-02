import axios from "axios";
import { useEffect, useState } from "react";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(null);

    const fetchQuote = async () => {
        try {
            const apiResponse = await axios.get('https://api.quotable.io/random');
            setQuote(apiResponse.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRefresh = () => {
        fetchQuote();
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="w-100 h-screen flex items-center justify-center bg-gray-400">

            <div className="quotebox w-[35vw] h-[40vh] 
             rounded-md bg-emerald-600 flex items-center flex-col">
                <h1 className="mt-4 text-white font-semibold text-xl">Random Quote Generator</h1>
                {quote && (
                    <div>
                        <strong><p className="text-center text-xl mt-6"> "{quote.content}"</p></strong>
                        <p className="text-center mt-2">- {quote.author}</p>
                    </div>

                )}
                <button className="bg-indigo-600 text-white p-3 mt-8 rounded-lg"
                    onClick={handleRefresh}>Refresh</button>

            </div>
        </div>
    );
};

export default QuoteGenerator;
