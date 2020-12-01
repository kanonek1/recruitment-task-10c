import React, { useState } from 'react';
import { InputDateYearEmotion } from './emotion';
import PropTypes from 'prop-types';

export default function InputDateYear({ onChange, ...props }) {
  const [activeInput, setActiveInput] = useState(false);

  const handleChange = (event) => onChange && onChange(event);

  return (
    <InputDateYearEmotion
      onClick={() => setActiveInput(true)}
      onBlur={() => setActiveInput(false)}
      activeInput={activeInput}
      onChange={(e) => handleChange(e)}
      value='1990'
      {...props}
    />
  );
}

InputDateYear.propTypes = {
  onChange: PropTypes.func,
};
