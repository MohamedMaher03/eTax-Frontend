
import React from 'react';


const LabelInput = ({ id, label, type = 'text', placeholder, value, onChange }) => {
    return (
        <div className="form-outline mb-4 text-start">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                className="form-control form-control-lg"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default LabelInput;
