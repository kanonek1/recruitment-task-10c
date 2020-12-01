import React from 'react';
import { css } from '@emotion/react';
import Input from '../../components/Input';
import PropTypes from 'prop-types';

export default function Name({ onChange, isInvalid, ...props }) {
  return (
    <div
      css={css`
        margin-top: 63px;
        position: relative;

        @media screen and (max-width: 991px) {
          margin-top: 33px;
          margin-left: 3px;
        }
      `}
    >
      <Input
        style={{ paddingLeft: 15.4 }}
        backgroundPosition='50% 42.5px'
        textLabel='Your name'
        onChange={(e) => onChange && onChange(e)}
        isInvalid={isInvalid}
        {...props}
      />
    </div>
  );
}

Name.propTypes = {
  onChange: PropTypes.func,
  isInvalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
