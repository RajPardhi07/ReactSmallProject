import { useState } from "react";

const PaymentFailed = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [boxes, setBoxes] = useState([
        { id: 1, text: 'Box 1', isChecked: false },
        { id: 2, text: 'Box 2', isChecked: false },
        { id: 3, text: 'Box 3', isChecked: false },
        { id: 4, text: 'Box 4', isChecked: false },
        { id: 5, text: 'Box 5', isChecked: false },
        { id: 6, text: 'Box 6', isChecked: false },
        { id: 7, text: 'Box 7', isChecked: false },
        { id: 8, text: 'Box 8', isChecked: false },
    ]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleBox = (id) => {
        setBoxes(
            boxes.map((box) =>
                box.id === id ? { ...box, isChecked: !box.isChecked } : box
            )
        );
    };

    return (
        <div className="flex items-center justify-center">
            <div
                tabIndex={0}
                role="button"
                className="bg-blue-400  mt-2 w-20 font-semibold rounded-lg text-white h-11 flex items-center justify-center text-center"
                onClick={toggleDropdown}
            >
                Click
            </div>
            {isOpen && (
                <ul className="absolute top-16 bg-green-200 flex items-center flex-col gap-3 w-52">
                    {boxes.map((box) => (
                        <div key={box.id} className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">{box.text}</span>
                                <input
                                    type="checkbox"
                                    className="ml-"
                                    checked={box.isChecked}
                                    onChange={() => toggleBox(box.id)}
                                />
                            </label>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PaymentFailed;
