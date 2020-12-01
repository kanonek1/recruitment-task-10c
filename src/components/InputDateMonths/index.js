import React, { useState } from 'react';
import { InputDateMonthsEmotion } from './emotion';
import PropTypes from 'prop-types';

export default function InputDateMonths({
  onChange,
  onClick,
  onBlur,
  ...props
}) {
  const [activeInput, setActiveInput] = useState(false);
  const [activeList, setActiveList] = useState(false);

  const handleChange = (event) => onChange && onChange(event);

  const handleClick = (event) => {
    setActiveInput(true);
    setActiveList(!activeList);

    onClick && onClick(event, activeList);
  };

  const handleBlur = (event) => {
    setActiveInput(false);
    onBlur && onBlur(event);
  };

  return (
    <InputDateMonthsEmotion
      onClick={handleClick}
      onBlur={handleBlur}
      activeInput={activeInput}
      onChange={(e) => handleChange(e)}
      {...props}
    />
  );
}

InputDateMonths.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};
