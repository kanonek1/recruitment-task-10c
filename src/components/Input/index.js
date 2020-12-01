import { css } from '@emotion/react';
import React, { useState } from 'react';
import { LabelEmotion, InputEmotion } from './emotion';
import InvalidMessage from '../InvalidMessage';
import PropTypes from 'prop-types';

export default function Input({
  textLabel,
  label,
  id,
  style,
  styleLabel,
  marginLeftLabel,
  isInvalid,
  onChange,
  lineHeightMobile = '51px',
  backgroundPosition = '50% 43px',
  ...props
}) {
  const [focus, setFocus] = useState(false);

  const handleChange = (event) => onChange && onChange(event);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <InputEmotion
        type='text'
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        lineHeightMobile={lineHeightMobile}
        style={style}
        id={id}
        isInvalid={isInvalid}
        onChange={handleChange}
        {...props}
        backgroundPosition={backgroundPosition}
      />
      {label && (
        <LabelEmotion
          htmlFor={id}
          active={focus}
          style={styleLabel}
          marginLeftLabel={marginLeftLabel}
        >
          {textLabel}
        </LabelEmotion>
      )}

      {isInvalid && <InvalidMessage />}
    </div>
  );
}

Input.defaultProps = { label: true };

Input.propTypes = {
  textLabel: PropTypes.string,
  label: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object,
  styleLabel: PropTypes.object,
  marginLeftLabel: PropTypes.number,
  isInvalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  lineHeightMobile: PropTypes.string,
  backgroundPosition: PropTypes.string,
};
