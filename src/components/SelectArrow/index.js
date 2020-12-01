import { checkPropTypes } from 'prop-types';
import React from 'react';
import { Arrow } from './emotion';
import PropTypes from 'prop-types';

export default function SelectArrow({
  top = '-65px',
  left = '78px',
  topMobile = '-65px',
  leftMobile = '17px',
}) {
  return (
    <Arrow
      top={top}
      left={left}
      topMobile={topMobile}
      leftMobile={leftMobile}
      className='select-arrow'
    />
  );
}

SelectArrow.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  topMobile: PropTypes.string,
  leftMobile: PropTypes.string,
};
