import React, { useEffect, useState, memo } from 'react';
import {
  ButtonWrapper,
  FormEmotion,
  UpperLine,
  FirstStepNumber,
  FirstStepWrapper,
  SecondStepWrapper,
  ThirdStepWrapper,
  SecondStepNumber,
  SecondStepText,
  ThirdStepNumber,
} from './emotion';
import Button from '../../components/Button';
import RadioGroup from '../RadioGroup';
import DateElement from '../DateElement';
import Mobile from '../Mobile';
import Name from '../Name';
import Description from '../Description';

const Form = memo(() => {
  const regexLetters = /[a-zA-Z]/g;

  const [dataValue, setDataValue] = useState('');
  const [nameValue, setNameValue] = useState('Bill Elliot');
  const [numberValue, setNumberValue] = useState('889 80');
  const [prefixValue, setPrefixValue] = useState('');

  const [isInvalidDate, setIsInvalidDate] = useState('');
  const [isInvalidName, setIsInvalidName] = useState('');
  const [isInvalidNumber, seIsInvalidNumber] = useState('');
  const [isInvalidPrefix, setIsInvalidPrefix] = useState('');
  const [isInvalidRadio, setIsInvalidRadio] = useState('');
  const [radioValues, setRadioValues] = useState();

  const [showObj, setShowObj] = useState({});

  const [dateObjectValue, setDateObjectValue] = useState('1990-01-01');
  const [nameObjectValue, setNameObjectValue] = useState(nameValue);
  const [numberObjectValue, setNumberObjectValue] = useState('Invalid Data');
  const [prefixObjectValue, setPrefixObjectValue] = useState('+48 (PL)');
  const [radioObjectValue, setRadioObjectValue] = useState(null);

  const handleChangeName = ({ target: { value } }) => setNameValue(value);

  const handleChangePrefix = (value) => setPrefixValue(value);

  const handleChangeNumber = ({ target: { value } }) => setNumberValue(value);

  const handleChangeRadioGroup = () => setIsInvalidRadio(false);

  const handleChangeAllInput = (value) => setDataValue(value);

  const handleSumbit = (e) => {
    e.preventDefault();

    if (nameValue.length < 4) {
      setIsInvalidName(true);
      setNameObjectValue('Invalid Data');
    } else {
      setIsInvalidName(false);
      setNameObjectValue(nameValue);
    }

    if (prefixValue === '') {
      setIsInvalidPrefix(true);
      setPrefixObjectValue('Invalid Data');
    } else {
      setIsInvalidPrefix(false);
      setPrefixObjectValue(prefixValue);
    }

    if (
      regexLetters.test(numberValue) ||
      numberValue.split(' ').join('').length !== 9
    ) {
      seIsInvalidNumber(true);
      setNumberObjectValue('Invalid Data');
    } else {
      seIsInvalidNumber(false);
      setNumberObjectValue(numberValue);
    }

    if (radioValues === null) {
      setIsInvalidRadio(true);
      setRadioObjectValue(null);
    } else {
      setIsInvalidRadio(false);
      setRadioObjectValue(radioValues);
    }

    if (
      new Date(dataValue).toString() === 'Invalid Date' ||
      handleValidateAge(dataValue) === false ||
      handleSplitDate(dataValue)[0] > 2020 ||
      handleSplitDate(dataValue)[0] < 1920
    ) {
      setIsInvalidDate(true);
      setDateObjectValue('Invalid Date');
    } else {
      setIsInvalidDate(false);
      setDateObjectValue(dataValue);
    }
  };

  useEffect(() => {
    setShowObj({
      name: nameObjectValue,
      prefix: prefixObjectValue,
      number: numberObjectValue,
      chessPlay: radioObjectValue,
      data: dateObjectValue,
    });
  }, [
    dateObjectValue,
    nameObjectValue,
    numberObjectValue,
    prefixObjectValue,
    radioObjectValue,
  ]);

  const handleValidateAge = (val) => {
    const date = handleSplitDate(val);

    return new Date(date[0] + 18, date[1] - 1, [2]) <= new Date();
  };

  const handleSplitDate = (date) => date.split('-').map(Number);

  return (
    <FormEmotion onSubmit={handleSumbit}>
      <UpperLine />
      <Description />

      <FirstStepWrapper active={false}>
        <FirstStepNumber>01</FirstStepNumber>
      </FirstStepWrapper>

      <SecondStepWrapper active={true}>
        <SecondStepNumber>02</SecondStepNumber>
        <SecondStepText>Personal </SecondStepText>
      </SecondStepWrapper>

      <ThirdStepWrapper active={false}>
        <ThirdStepNumber>03</ThirdStepNumber>
      </ThirdStepWrapper>

      <Name
        isInvalid={isInvalidName}
        onChange={handleChangeName}
        value={nameValue}
      />
      <Mobile
        isInvalidPrefix={isInvalidPrefix}
        isInvalidNumber={isInvalidNumber}
        onChangePrefix={handleChangePrefix}
        onChangeNumber={handleChangeNumber}
        valueOnStartPrefix={(e) => setPrefixValue(e)}
        valueNumber={numberValue}
      />
      <RadioGroup
        values={['Yes', 'No']}
        valueOnStart={(e) => setRadioValues(e)}
        isInvalidRadio={isInvalidRadio}
        onChange={handleChangeRadioGroup}
      />
      <DateElement
        oneChangeAllInput={handleChangeAllInput}
        isInvalidDate={isInvalidDate}
      />
      <ButtonWrapper>
        <Button type='submit' />
      </ButtonWrapper>
    </FormEmotion>
  );
});

export default Form;
