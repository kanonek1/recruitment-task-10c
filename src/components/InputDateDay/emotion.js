import styled from '@emotion/styled';
import { InputDateYearEmotion } from '../InputDateYear/emotion';

const InputDateDayEmotion = styled(InputDateYearEmotion)`
  width: 50px;
  height: 50px;
  padding-left: 4px;
  text-align: center;
  margin-left: 1px;

  @media screen and (max-width: 991px) {
    width: 50px;
    padding-left: 1px;
  }

  &:focus {
    border-color: #652ae6;
  }
`;

export { InputDateDayEmotion };
