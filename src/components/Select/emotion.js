import styled from '@emotion/styled';

const LiElement = styled.li`
  border-bottom: 1px solid #dadaed;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15.9365px;
  line-height: 16px;
  letter-spacing: 0.318787px;
  color: #202020;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background-color: ${({ value }) => value === '' && '#dadaed'};

  &:hover {
    color: #652ae6;
  }
`;
const UlElement = styled.ul`
  position: absolute;
  background: #fff;
  width: 100%;
  list-style: none;
  z-index: 10;
  padding: 0;
  margin: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { LiElement, UlElement };
