import React from "react";

const InputGroup = ({label, type, placeholder, value, options, view, onChange, isRequired=false}) => {
    const handleInputChange = (event) => {
        onChange(event.target.value);
    }
    
    return(
        <div className="flex flex-col mb-2">
            <label>{label}<span className="etxt-error">{isRequired ? "*" : ""}</span></label>

            {view === "select" ? (
                    <select
                        className="py-1.5 rounded-sm outline-none cursor-pointer"
                        value={value}
                        onChange={handleInputChange}
                    >
                        {options.map((option) => {
                            return (
                                <option value={option.value} key={option.label}>
                                    {option.label}
                                </option>
                            );
                        })}
                    </select>
                ) : <input className="p-1 mt-1 rounded outline-none" type={type} placeholder={placeholder} value={value} onChange={handleInputChange}/>}
        </div>
    )
}

export default InputGroup;