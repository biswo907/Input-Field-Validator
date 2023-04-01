import React from 'react';
import { useState } from 'react';

export const AccountNumberInput = ({ onChange, value, required }) => {

    const [error, setError] = useState(false)

    const AccountNumberValidation = (name) => {
        const accountnoregex = new RegExp("^[0-9]{9,18}$");
        return accountnoregex.test(name);
    };

    const handleOnChange = (e) => {
        onChange(e.target.value);
        if (!e.target.value) {
            setError(false);
            return;
        }
        if (AccountNumberValidation(e.target.value)) {
            setError(false)
        } else {
            //error message
            console.log("error");
            setError(true)
        }
    };

    return (
        <label htmlFor='Accountnumber' className='inputLable'>
            <span className='inputlabelheading'>Account No{required && <p style={{ color: "red" }}>*</p>}</span>
            <input className='inputfield' type="text" placeholder='enter your acount Number' value={value} onChange={handleOnChange} style={error ? { border: "1px solid red" } : {}} />
        </label>
    );
};

export default AccountNumberInput;