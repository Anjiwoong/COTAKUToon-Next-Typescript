import { ChangeEvent, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { HeaderTypes } from '../../types/header-types';
import { DataTypes } from '../../types/webtoon-types';

import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../UI/Input';
import Backdrop from '../UI/Backdrop';
import SearchModal from '../UI/SearchModal';

const HeaderSearchForm = ({ sub, webtoon }: HeaderTypes) => {
  const [show, setShow] = useState<boolean>(false);
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [filteredWebtoon, setFilteredWebtoon] = useState<DataTypes[]>([]);

  const onFocusHandler = () => setShow(true);

  const onCloseHandler = () => setShow(false);

  const throttleHandler = useMemo(
    () => _.throttle(webtoon => setFilteredWebtoon(webtoon), 500),
    []
  );

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp(e.target.value, 'i');

    const matchedWebtoon = webtoon?.filter(data => data.title?.match(regExp));

    throttleHandler(matchedWebtoon);
    setEnteredValue(e.target.value);
  };

  return (
    <Wrapper role="search" sub={sub}>
      <Container>
        <label>
          <AiOutlineSearch />
          <Input
            type="text"
            onFocus={onFocusHandler}
            value={enteredValue}
            onChange={searchHandler}
          />
        </label>
        {show && (
          <>
            <Backdrop onClose={onCloseHandler} />
            <SearchModal webtoon={filteredWebtoon} value={enteredValue} />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin-right: 8px;

  ${({ theme }) => theme.media.mobile`
    padding: 9px 16px 5px;
    width: 100%;
  `}

  ${(props: HeaderTypes) =>
    props.sub &&
    css`
      display: none;
    `}
`;

const Container = styled.div`
  width: 259px;
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;
  position: relative;
  z-index: 10000;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
    `}

  label {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')}

    padding: 0 11px;
    height: 40px;
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.fontGray2};
    margin-right: 12px;
    transform: translateY(1px);

    ${({ theme }) => theme.media.mobile`
      transform: translateY(0);
    `}
  }

  input {
    border: none;
    background: ${({ theme }) => theme.colors.gray1};
    caret-color: ${({ theme }) => theme.colors.primaryColor};

    &:focus {
      outline: none;
    }
  }
`;

export default HeaderSearchForm;
