import styled from '@emotion/styled';

const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.3s all ease;

  &::before {
    content: '';
    position: absolute;
    top: ${({ top }) => top};
    bottom: 0;
    left: ${({ left }) => left};
    right: 0;
    margin: auto;
    height: 0px;
    width: 0px;
    border: 2px solid;
    border-color: #2f3030 #2f3030 transparent transparent;
    transform: rotate(135deg);
    mix-blend-mode: normal;
    opacity: 0.25;

    @media screen and (max-width: 991px) {
      top: ${({ topMobile }) => topMobile};
      left: ${({ leftMobile }) => leftMobile};
    }
  }
`;

export { Arrow };
