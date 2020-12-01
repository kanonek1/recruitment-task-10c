import styled from '@emotion/styled';

const RadioWrapper = styled.div`
  border: 2px solid
    ${({ isInvalidRadio, checked }) => {
      return isInvalidRadio ? '#EB5757' : checked ? '#1bfec0' : '#dadaed';
    }};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  height: calc(52px - 2px);
  width: calc(52px - 2px);
  top: -2px;
  left: 1px;

  &:hover,
  &:hover .small-square,
  &:focus,
  &:focus .small-square {
    border-color: #1bfec0;
  }
`;

const SmallSquare = styled.div`
  position: absolute;
  border: 2px solid
    ${({ isInvalidRadio, checked }) => {
      return isInvalidRadio ? '#EB5757' : checked ? '#1bfec0' : '#dadaed';
    }};
  width: 15px;
  height: 15px;
  background: #f0f0f3;
  box-sizing: border-box;
  top: 1px;
  right: 1px;
  transform: translate(10px, 15px);
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    right: 4px;
    background: ${(props) => (props.checked ? '#1bfec0' : '')};
    width: 3px;
    height: 3px;
  }
`;

const LabelTextWrapper = styled.span`
  font-size: 15.5px;
  color: #333;
  cursor: pointer;

  position: absolute;
  top: calc(50% + 0.2px);
  left: calc(50% - 3.6px);
  transform: translate(-50%, -50%);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

export { RadioWrapper, SmallSquare, LabelTextWrapper };
