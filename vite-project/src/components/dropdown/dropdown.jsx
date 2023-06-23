import { useEffect, useState } from "react";
import "./dropdown.css";


const Dropdown = ({ options, onChangeFunc, width }) => {
    const [optionsList, setOptionList] = useState([]);
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        setOptionList(options);
        setSelectedOption(options[0].label);
    }, [])

    const onChangeElement = (label, value) => {
        setSelectedOption(label);
        if (onChangeFunc != undefined) {
            onChangeFunc(value);
        }
    }
    return (
        <>
            <div className="custom-dropdown" style={{ width: width }}>
                <div className="custom-dropdown__heading">{selectedOption}</div>
                <div className="custom-dropdown__elements">
                    {optionsList.map(({ label, value }, counter) => <div key={counter} className="custom-dropdown__element" onClick={() => onChangeElement(label, value)}> {label} </div>)}
                </div>

            </div>
        </>
    )
}
Dropdown.defaultProps = {
    width: "250px"
}
export default Dropdown;