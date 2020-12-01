import styled from '@emotion/styled';

const ButtonEmotion = styled.button`
  border: none;
  outline: none;
  width: 187px;
  height: 51px;
  background: linear-gradient(90deg, #8658eb 1%, #6d34e7 100%);
  box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background-image 0.5s linear;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 991px) {
    width: 181px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #6d34e7 1%, #8658eb 100%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;

const ButtonText = styled.div`
  font-weight: 500;
  font-size: 12.0061px;
  line-height: 28px;
  letter-spacing: 0.480054px;
  text-transform: uppercase;
  position: relative;
  top: 3px;
  left: 3px;
  color: #fff;

  @media screen and (max-width: 991px) {
    top: 1px;
    left: -1px;
  }
`;

const ButtonIconWrapper = styled.div`
  position: absolute;
  right: -49px;
  width: 50px;
  height: 51px;
  background: #7841f4;
  box-shadow: 0px 23px 24px rgba(13, 13, 31, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ButtonEmotion, ButtonText, ButtonIconWrapper };
