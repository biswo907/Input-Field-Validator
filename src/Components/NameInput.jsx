import React from 'react';
import { useState } from 'react';
export const NameInput = ({ onChange, value, required }) => {

  const [error, setError] = useState(false)



  const NameValidation = (name) => {
    const nameRegex = new RegExp("^[a-zA-Z\\s]+");
    return nameRegex.test(name);
  };

  const handleOnChange = (e) => {
    onChange(e.target.value);
    if (!e.target.value) {
      setError(false);
      return;
    }
    if (NameValidation(e.target.value)) {
      setError(false)
    } else {
      //error message
      setError(true)
    }
  };


  return (
    <label htmlFor='Name' className='inputLable'>
      <span className='inputlabelheading'>Name{required && <p style={{ color: "red" }}>*</p>}</span>
      <input className='inputfield' type="text" placeholder='@john doe' value={value} onChange={handleOnChange} style={error ? { border: "1px solid red" } : {}} />
    </label>
  );
};

export default NameInput;