import { useRef } from "react"

const ScrollToSection = () => {
    const ref = useRef();
    const data = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "70vh",
                background: "red"
            }
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "70vh",
                background: "blue"
            }
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "70vh",
                background: "green"
            }
        },
        {
            label: "Forth Card",
            style: {
                width: "100%",
                height: "70vh",
                background: "yellow"
            }
        },
        {
            label: "Five Card",
            style: {
                width: "100%",
                height: "70vh",
                background: "orange"
            }
        },
    ]

    const handleClickSection = () => {
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });

    }

    return (
        <div>
            <h1>ScrollToSection</h1>
            <button onClick={handleClickSection} className="bg-black p-3 text-white rounded-md mb-7 ml-[45%]">Click To Scroll</button>

            {data.map((dataItem, index) => (
                <div key={index} ref={index === 3 ? ref : null} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>

                </div>
            ))}

        </div>
    )
}

export default ScrollToSection