import styled from '@emotion/styled';

const InputEmotion = styled.input`
  background: #f5f5f5 no-repeat;
  background-image: ${({ isInvalid }) =>
    isInvalid
      ? `linear-gradient(to bottom, #EB5757, #EB5757),
    linear-gradient(to bottom, #dadaed, #dadaed)`
      : `linear-gradient(to bottom, #652ae6, #652ae6),
    linear-gradient(to bottom, #dadaed, #dadaed)`};

  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-size: ${({ isInvalid }) =>
    isInvalid ? ' 100% 2px' : '0 2px, 100% 2px'};
  border-radius: 0;
  border: 0;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  width: 100%;

  padding-left: 16px;
  font-size: 15.9365px;
  line-height: 48px;
  letter-spacing: 0.318787px;
  font-weight: 400;
  color: ${({ isInvalid }) => (isInvalid ? '#EB5757' : '#202020')};
  font-family: Roboto;

  &:focus {
    background: #f5f5f5 no-repeat;
    order: 0;
    outline: none;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background-image: ${({ isInvalid }) =>
      isInvalid
        ? `linear-gradient(to bottom, #EB5757, #EB5757),
    linear-gradient(to bottom, #dadaed, #dadaed)`
        : `linear-gradient(to bottom, #652ae6, #652ae6),
    linear-gradient(to bottom, #dadaed, #dadaed)`};

    background-position: ${({ backgroundPosition }) => backgroundPosition};
    background-size: 100% 2px, 100% 1px;
  }

  @media screen and (max-width: 991px) {
    line-height: ${({ lineHeightMobile }) => lineHeightMobile};
    background-position: 50% 45px;
    padding-left: ${({ paddingLeftMobile }) => paddingLeftMobile};

    &:focus {
      background-position: 50% 45px;
    }
  }
`;
const LabelEmotion = styled.label`
  left: 3px;
  padding-left: 12px;
  position: absolute;
  top: -25px;
  transform-origin: 0% 100%;
  transform: translateY(13px);
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  color: ${({ active }) => (active ? '#652ae6' : '#333')};

  transition: transform 0.2s ease-out, color 0.2s ease-out;
  transform-origin: 0% 100%;
  font-weight: 400;

  font-size: 10.9564px;
  line-height: 28px;

  @media screen and (max-width: 991px) {
    margin-left: ${({ marginLeftLabel }) => marginLeftLabel}px;
  }
`;

export { LabelEmotion, InputEmotion };
