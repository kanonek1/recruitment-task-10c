import { css } from '@emotion/react';
import React from 'react';
import { RadioWrapper, SmallSquare, LabelTextWrapper } from './emotion';
import PropTypes from 'prop-types';

export default function Radio({
  id,
  isChecked,
  isInvalidRadio,
  onChange,
  textLabel,
  textStyle,
  value,
  ...props
}) {
  const handleChange = (e) => onChange && onChange(e);

  return (
    <RadioWrapper
      checked={isChecked}
      onClick={handleChange}
      data-value={value}
      isInvalidRadio={isInvalidRadio}
    >
      <label htmlFor={id}>
        <LabelTextWrapper style={textStyle}>{textLabel}</LabelTextWrapper>
        <input
          type='radio'
          name={`radio-button-${id}`}
          id={id}
          css={css`
            opacity: 0;
            cursor: pointer;
            z-index: -1;
            position: absolute;
          `}
          value={value}
          onChange={handleChange}
          checked={isChecked}
          {...props}
        />
      </label>
      <SmallSquare
        className='small-square'
        checked={isChecked}
        isInvalidRadio={isInvalidRadio}
      />
    </RadioWrapper>
  );
}

Radio.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isInvalidRadio: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  textLabel: PropTypes.string,
  textStyle: PropTypes.object,
  value: PropTypes.string,
};
