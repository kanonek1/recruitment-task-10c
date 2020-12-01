import styled from '@emotion/styled';
import { InputEmotion } from '../../components/Input/emotion';

const MobilePrefixInput = styled(InputEmotion)`
  cursor: 'pointer';
  padding-left: 14.5px;

  @media screen and (max-width: 991px) {
    padding-left: 14.5px;
  }
`;

export { MobilePrefixInput };
