import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import SelectArrow from '../../components/SelectArrow';
import PropTypes from 'prop-types';

const data = ['', '+48 (PL)', '+49 (DE)', '+33 (FR)', '+47 (NO)', '+00 (US)'];

export default function Mobile({
  isInvalidNumber,
  isInvalidPrefix,
  onChangeNumber,
  onChangePrefix,
  valueNumber,
  valueOnStartPrefix,
  ...props
}) {
  const [showList, setShowList] = useState(false);
  const [inputPrefixValue, setInputPrefixValue] = useState('+48 (PL)');
  const id = 'mobile-input';

  useEffect(() => {
    valueOnStartPrefix && valueOnStartPrefix(inputPrefixValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      css={css`
        margin-top: 26px;
        display: flex;
        position: relative;

        @media screen and (max-width: 991px) {
          margin-top: 27px;
        }
      `}
    >
      <div
        css={css`
          width: 48%;
          margin-right: 14px;
          margin-top: 1px;
          position: relative;

          @media screen and (max-width: 991px) {
            width: 44%;
            margin-right: 20px;
          }
        `}
      >
        <Input
          backgroundPosition='50% 44px;'
          className='select-mobile'
          id={id}
          isInvalid={isInvalidPrefix}
          lineHeightMobile='48px'
          marginLeftLabel={2}
          onClick={() => setShowList(!showList)}
          readOnly
          textLabel='Mobile'
          type='text'
          style={{
            cursor: 'pointer',
            // paddingLeft: 14.5,
          }}
          styleLabel={{ marginTop: -1 }}
          value={inputPrefixValue}
        />

        <SelectArrow
          top='-57px'
          left='74px'
          leftMobile='82px'
          topMobile='-52px'
        />

        <Select
          inputId={id}
          isShowList={(e) => setShowList(e)}
          list={data}
          onChangeList={(value) => {
            setInputPrefixValue(value);
            onChangePrefix && onChangePrefix(value);
            setShowList(false);
          }}
          readOnly
          showList={showList}
          {...props}
        />
      </div>
      <div
        css={css`
          width: 97%;
          margin-top: 1px;
          @media screen and (max-width: 991px) {
            width: 50%;
          }
        `}
      >
        <Input
          label={false}
          isInvalid={isInvalidNumber}
          onChange={(e) => onChangeNumber && onChangeNumber(e)}
          maxLength={11}
          lineHeightMobile='50px'
          backgroundPosition='50% 44px;'
          value={valueNumber}
        />
      </div>
    </div>
  );
}

Mobile.propTypes = {
  isInvalidNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isInvalidPrefix: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChangeNumber: PropTypes.func,
  onChangePrefix: PropTypes.func,
  valueNumber: PropTypes.string,
  valueOnStartPrefix: PropTypes.func,
};
