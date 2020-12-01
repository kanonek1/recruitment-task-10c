import React, { useState } from 'react';
import { InputDateDayEmotion } from './emotion';
import PropTypes from 'prop-types';

export default function InputDateDay({ onChange, ...props }) {
  const [activeInput, setActiveInput] = useState(false);

  const handleChange = (event) => onChange && onChange(event);

  return (
    <InputDateDayEmotion
      onClick={() => setActiveInput(true)}
      onBlur={() => setActiveInput(false)}
      activeInput={activeInput}
      onChange={(e) => handleChange(e)}
      value='1990'
      {...props}
    />
  );
}

InputDateDay.propTypes = {
  onChange: PropTypes.func,
};
