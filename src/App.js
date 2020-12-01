/* eslint-disable react/react-in-jsx-scope */
import Title from './components/Title';
import { css } from '@emotion/react';
import gradient from './images/gredient.png';
import Form from './UI/Form';
import LeftBox from './UI/LeftBox';

function App() {
  return (
    <div className='App'>
      <div
        css={css`
          background-image: url(${gradient});
          background-repeat: no-repeat;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            position: relative;
            top: 154.3px;
            left: 26.5px;

            @media screen and (max-width: 991px) {
              left: 0;
            }
          `}
        >
          <LeftBox></LeftBox>
          <div
            css={css`
              position: relative;
            `}
          >
            <Title>Your account</Title>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
