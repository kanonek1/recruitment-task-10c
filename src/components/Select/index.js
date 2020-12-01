import React, { useEffect, useCallback, memo } from 'react';
import { css } from '@emotion/react';
import { UlElement, LiElement } from './emotion';
import PropTypes from 'prop-types';

const Select = memo(({ list, onChangeList, styleUI, showList, isShowList }) => {
  const handleClickOutside = useCallback(
    ({ target: { classList } }) => {
      if (
        !classList.contains('select-list-element') &&
        !classList.contains('select-mobile') &&
        !classList.contains('select-arrow')
      ) {
        isShowList && isShowList(false);
      }
    },
    [isShowList]
  );

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleLiClick = (value) => {
    onChangeList && onChangeList(value);
    isShowList && isShowList(false);
  };

  return (
    <>
      {showList && (
        <div
          css={css`
            width: 100%;
            position: absolute;
            margin-top: 1px;
          `}
        >
          <UlElement style={styleUI}>
            {list.map((listItem, index) => (
              <LiElement
                key={listItem + index}
                onClick={() => handleLiClick(listItem)}
                className='select-list-element'
                value={listItem}
              >
                {listItem}
              </LiElement>
            ))}
          </UlElement>
        </div>
      )}
    </>
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  list: PropTypes.array,
  onChangeList: PropTypes.func,
  styleUI: PropTypes.object,
  showList: PropTypes.bool,
  isShowList: PropTypes.func,
};

export default Select;
