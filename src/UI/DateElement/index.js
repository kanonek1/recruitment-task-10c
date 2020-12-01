/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import Select from '../../components/Select';
import InputDateYear from '../../components/InputDateYear';
import InputDateDay from '../../components/InputDateDay';
import InputDateMonths from '../../components/InputDateMonths';
import PropTypes from 'prop-types';
import {
  Line,
  LongerLine,
  InputDateHidden,
  LabelDate,
  SelectWrapper,
} from './emotion';
import InvalidMessage from '../../components/InvalidMessage';
import SelectArrow from '../../components/SelectArrow';

const obj = [
  { name: 'January', id: 1, mobile: '01' },
  { name: 'February', id: 2, mobile: '02' },
  { name: 'March', id: 3, mobile: '03' },
  { name: 'April', id: 4, mobile: '04' },
  { name: 'May', id: 5, mobile: '05' },
  { name: 'June', id: 6, mobile: '06' },
  { name: 'July', id: 7, mobile: '07' },
  { name: 'August', id: 8, mobile: '08' },
  { name: 'September', id: 9, mobile: '09' },
  { name: 'October', id: 10, mobile: '10' },
  { name: 'November', id: 11, mobile: '11' },
  { name: 'December', id: 12, mobile: '12' },
];

export default function DateElement({ isInvalidDate, oneChangeAllInput }) {
  const [date, setDate] = useState(['1990-01-01']);
  const [valueList, setValueList] = useState('January');
  const [valueOpenSelect, setValueOpenSelect] = useState(false);
  const [desktopList, setDesktopList] = useState(null);
  const [inputYearValue, setInputYearValue] = useState('1990');
  const [inputDayValue, setInputDayValue] = useState('01');

  const inputId = 'month';

  const handleResize = ({ target: { innerWidth } }) => {
    if (innerWidth <= 991) {
      setDesktopList(obj.map((el) => Object.values(el)[2]));

      setValueList((prev) => {
        if (isNaN(Number(prev)) === false) {
          return prev;
        } else {
          return obj.filter(({ name }) => name === prev)[0].mobile;
        }
      });
    } else {
      setDesktopList(obj.map((el) => Object.values(el)[0]));

      setValueList((prev) => {
        if (isNaN(Number(prev)) === false) {
          return obj.filter(({ mobile }) => mobile === prev)[0].name;
        } else {
          return prev;
        }
      });
    }
  };

  useEffect(() => {
    const [month] = obj.filter(({ mobile, name }) => {
      if (window.innerWidth <= 991) {
        return mobile === valueList;
      } else {
        return name === valueList;
      }
    });

    if (month) {
      oneChangeAllInput &&
        oneChangeAllInput(`${inputYearValue}-${month.mobile}-${inputDayValue}`);
    }
  }, [inputYearValue, inputDayValue, oneChangeAllInput, valueList]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopList]);

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setDesktopList(obj.map((el) => Object.values(el)[2]));
      setValueList('01');
    } else {
      setDesktopList(obj.map((el) => Object.values(el)[0]));
      setValueList('January');
    }
  }, []);

  const handleInputYear = ({ target }) => setInputYearValue(target.value);
  const handleInputDay = ({ target }) => setInputDayValue(target.value);

  return (
    <div>
      <InputDateHidden
        type='date'
        name='date'
        id='date-label'
        value={date}
        readOnly
      />
      <LabelDate htmlFor='date-label'>Date of birth</LabelDate>

      <div
        css={css`
          display: flex;
          margin-top: 13px;
          position: relative;

          @media screen and (max-width: 991px) {
            margin-top: 12px;
            margin-left: -1px;
          }
        `}
      >
        <InputDateDay
          id='day'
          value={inputDayValue}
          maxLength={2}
          onChange={handleInputDay}
          autocomplete='off'
          isInvalidDate={isInvalidDate}
        />

        <Line />
        <div
          css={css`
            position: relative;
          `}
        >
          <InputDateMonths
            value={valueList}
            className='select-mobile'
            isInvalidDate={isInvalidDate}
            onClick={() => setValueOpenSelect(!valueOpenSelect)}
            style={{ cursor: 'pointer', paddingLeft: 13 }}
            id={inputId}
            readOnly
          />

          <SelectWrapper>
            <SelectArrow />
            <Select
              list={desktopList}
              onChangeList={(value) => setValueList(value)}
              styleUI={{ left: -13 }}
              isShowList={(show) => setValueOpenSelect(show)}
              showList={valueOpenSelect}
              inputId={inputId}
            />
          </SelectWrapper>
        </div>

        <LongerLine />
        <InputDateYear
          onChange={handleInputYear}
          value={inputYearValue}
          maxLength={4}
          isInvalidDate={isInvalidDate}
        />

        {isInvalidDate && <InvalidMessage style={{ bottom: -17 }} />}
      </div>
    </div>
  );
}

DateElement.propTypes = {
  isInvalidDate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  oneChangeAllInput: PropTypes.func,
};
