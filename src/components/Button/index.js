import React from 'react';
import { ButtonEmotion, ButtonText, ButtonIconWrapper } from './emotion';
import arrowRight from '../../images/arrow-right.png';
import { css } from '@emotion/react';

export default function Button({ ...props }) {
  return (
    <ButtonEmotion role='button' {...props}>
      <ButtonText>Continue</ButtonText>
      <ButtonIconWrapper>
        <img
          src={arrowRight}
          alt='arrow right'
          css={css`
            width: 16.99px;
            height: 9.21px;
          `}
        />
      </ButtonIconWrapper>
    </ButtonEmotion>
  );
}
