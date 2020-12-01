import React from 'react';
import { InvalidDiv } from './emotion';
import PropTypes from 'prop-types';

export default function InvalidMessage({ text = 'Invalid data', ...props }) {
  return <InvalidDiv {...props}>{text}</InvalidDiv>;
}

InvalidMessage.propTypes = {
  text: PropTypes.string,
};
