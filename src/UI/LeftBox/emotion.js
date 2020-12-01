import styled from '@emotion/styled';
import imgBG from '../../images/LINES-IMG.png';
import imgLines from '../../images/LINES 2.png';

const LeftBoxEmotion = styled.div`
  position: relative;
  max-width: 255px;
  width: 255px;
  background: url(${imgBG}) no-repeat center;
  background-color: #242424;
  z-index: 1;

  @media screen and (max-width: 991px) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    background: url(${imgLines}) no-repeat center;
    z-index: 2;
    width: 255px;
    height: 552px;
    left: 6px;
    top: 9px;
  }
`;

export { LeftBoxEmotion };
