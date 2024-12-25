/* import React, { useState, useRef } from 'react';

const FormWithValidation = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setError('Input cannot be empty.');
      inputRef.current.focus();
      return;
    }
    console.log('Submitted Value:', value);
    setValue('');
    setError('');
  };

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <h2>Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter something"
        />
        <br />
        <button type="button" onClick={handleClick}>
          Focus Input
        </button>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormWithValidation;
 */

import { useState } from "react";

export default function Consoling() {
  const [value, setValue] = useState("");
  function handleSubmission(e) {
    e.preventDefault();
    console.log(value);
    setValue("")
  }
  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
