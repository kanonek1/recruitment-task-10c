import styled from '@emotion/styled';

const InputDateYearEmotion = styled.input`
  width: 140px;
  height: 50px;
  background: rgba(255, 255, 255, 0.0001);
  border: 2px solid
    ${({ isInvalidDate, activeInput }) => {
      return isInvalidDate ? '#EB5757' : activeInput ? '#652ae6' : '#dadaed';
    }};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 16px;
  color: #202020;
  outline: none;
  font-family: Roboto;
  transition: 0.3s all ease;

  position: relative;
  left: 1px;

  @media screen and (max-width: 991px) {
    width: 110px;
    padding-left: 14px;
  }

  &:focus {
    border-color: #652ae6;
  }
`;

export { InputDateYearEmotion };
