import styled from '@emotion/styled';

const InputDateMonthsEmotion = styled.input`
  width: 130px;
  height: 50px;
  background: rgba(255, 255, 255, 0.0001);
  border: 2px solid
    ${({ isInvalidDate, openValueSelect }) => {
      return isInvalidDate
        ? '#EB5757'
        : openValueSelect
        ? '#652ae6'
        : '#dadaed';
    }};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-left: 13px;
  position: relative;
  transition: 0.3s all ease;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #202020;
  outline: none;

  @media screen and (max-width: 991px) {
    width: 50px;
  }

  &:focus {
    border-color: #652ae6;
  }
`;

export { InputDateMonthsEmotion };
