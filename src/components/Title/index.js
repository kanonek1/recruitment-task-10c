import React from 'react';
import { TitleEmotion } from './emotion';
import PropTypes from 'prop-types';

export default function Title({ children }) {
  return <TitleEmotion>{children}</TitleEmotion>;
}

Title.propTypes = {
  children: PropTypes.node,
};
