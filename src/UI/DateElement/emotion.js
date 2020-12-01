import styled from '@emotion/styled';

const Line = styled.div`
  width: 10.77px;
  height: 2px;
  background: #a2a2af;
  mix-blend-mode: normal;
  opacity: 0.25;
  margin: auto 0;
  margin-left: 6px;
  margin-right: 11px;
  margin-bottom: 24px;
`;

const LongerLine = styled(Line)`
  width: 10px;
  margin-left: 5px;
  margin-right: 10px;
  @media screen and (max-width: 991px) {
    margin-right: 8px;
  }
`;

const InputDateHidden = styled.input`
  opacity: 0;
`;

const LabelDate = styled.label`
  font-size: 10.9564px;
  line-height: 11px;
  color: #333333;
  display: block;
  padding-left: 18px;
  padding-top: 1.2px;

  @media screen and (max-width: 991px) {
    padding-left: 19px;
    padding-top: 1px;
  }
`;

const SelectWrapper = styled.span`
  position: absolute;
  width: 100%;
  padding-left: 13px;
  width: calc(100% - 13px);
  bottom: -6px;
`;

export { Line, LongerLine, InputDateHidden, LabelDate, SelectWrapper };
