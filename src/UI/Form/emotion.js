import styled from '@emotion/styled';

const FormEmotion = styled.form`
  background: linear-gradient(
      5.88deg,
      rgba(165, 165, 180, 0.15) 4.19%,
      rgba(228, 235, 239, 0.15) 95.81%,
      rgba(231, 232, 238, 0.15) 95.81%,
      rgba(231, 232, 238, 0.15) 95.81%
    ),
    #fcfcfd;
  padding-top: 41px;
  padding-right: 51px;
  padding-left: 49px;
  width: 370px;
  height: 510px;
  position: relative;

  @media screen and (max-width: 991px) {
    padding-top: 14px;
    padding-right: 13px;
    padding-left: 15px;
    width: 262px;
    height: 490px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -25.5px;
  right: 0;

  @media screen and (max-width: 991px) {
    transform: translate(-50%, -50%);
    left: 40.4%;
    bottom: -49.5px;
  }
`;

const UpperLine = styled.div`
  width: 70px;
  height: 2px;
  background: #1bfec0;
  position: absolute;
  top: -2px;
`;
const FirstStepWrapper = styled.div`
  position: absolute;
  top: 107px;
  right: -25px;
  width: 25px;
  height: 2px;
  background: ${(props) => (props.active ? '#1bfec0' : '#5b5b5b')};
  transition: 0.3s all ease;
  cursor: pointer;

  &:hover {
    background: #1bfec0;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const FirstStepNumber = styled.span`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.22px;
  color: #e3e3e3;
  position: absolute;
  top: 10px;
  left: 9px;
  font-weight: 300;
`;

const SecondStepWrapper = styled.div`
  position: absolute;
  top: 194px;
  right: -25px;
  width: 25px;
  height: 2px;
  background: ${(props) => (props.active ? '#1bfec0' : '#5b5b5b')};
  cursor: pointer;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const SecondStepNumber = styled.span`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.22px;
  color: #e3e3e3;
  position: absolute;
  top: 10px;
  left: 9px;
  font-weight: 300;
`;

const SecondStepText = styled.span`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.22px;
  color: #e3e3e3;
  position: absolute;
  top: 25px;
  left: 9px;
  font-weight: 300;
`;

const ThirdStepWrapper = styled.div`
  position: absolute;
  top: 272px;
  right: -25px;
  width: 25px;
  height: 2px;
  background: ${(props) => (props.active ? '#1bfec0' : '#5b5b5b')};
  z-index: 10;
  transition: 0.3s all ease;
  cursor: pointer;

  &:hover {
    background: #1bfec0;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const ThirdStepNumber = styled.span`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.22px;
  color: #fff;
  position: absolute;
  top: 10px;
  left: 9px;
  font-weight: 300;
`;

export {
  FormEmotion,
  ButtonWrapper,
  UpperLine,
  FirstStepWrapper,
  SecondStepWrapper,
  ThirdStepWrapper,
  FirstStepNumber,
  SecondStepNumber,
  SecondStepText,
  ThirdStepNumber,
};
