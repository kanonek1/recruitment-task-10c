import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import InvalidMessage from '../../components/InvalidMessage';
import Radio from '../../components/Radio';
import PropTypes from 'prop-types';

export default function RadioGroup({
  isInvalidRadio,
  onChange,
  valueOnStart,
  values,
}) {
  const [playChess, setPlayChess] = useState(null);

  const handleChange = ({
    currentTarget: {
      dataset: { value },
    },
  }) => {
    setPlayChess(value);
    onChange && onChange(value);
  };

  useEffect(() => {
    valueOnStart && valueOnStart(playChess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueOnStart, playChess]);

  return (
    <div
      css={css`
        margin-top: 21px;

        @media screen and (max-width: 991px) {
          margin-left: 2px;
          margin-top: 22px;
        }
      `}
    >
      <p
        css={css`
          font-weight: normal;
          font-size: 10.9564px;
          line-height: 11px;
          display: flex;
          align-items: center;
          color: #333333;
          padding-left: 15px;
        `}
      >
        Can you play chess?
      </p>
      <div
        css={css`
          display: flex;
          margin-top: 15px;
          margin-left: -1px;
          position: relative;

          @media screen and (max-width: 991px) {
            margin-left: -2px;
            margin-top: 13px;
          }
        `}
      >
        <div
          css={css`
            margin-right: 25px;
          `}
        >
          <Radio
            textLabel='Yes'
            id='1'
            value={values[0]}
            onChange={handleChange}
            isChecked={playChess === 'Yes'}
            isInvalidRadio={isInvalidRadio}
          />
        </div>
        <div
          css={css`
            margin-left: 1px;
          `}
        >
          <Radio
            textLabel='No'
            id='2'
            value={values[1]}
            onChange={handleChange}
            isChecked={playChess === 'No'}
            isInvalidRadio={isInvalidRadio}
            textStyle={{ marginLeft: -1 }}
          />
        </div>
        {isInvalidRadio && (
          <InvalidMessage style={{ bottom: -15, top: 'uset' }} />
        )}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  isInvalidRadio: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  valueOnStart: PropTypes.func,
  values: PropTypes.array,
};
