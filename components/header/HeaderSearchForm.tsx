import styled, { css } from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../UI/Input';
import Link from 'next/link';
import { StyleProps } from './header-props';

const HeaderSearchForm = () => {
  return (
    <Wrapper role="search">
      <Container>
        <label>
          <AiOutlineSearch />
          <Input type="text" />
        </label>
      </Container>
      <SearchContainer>
        <SearchBooks>
          <span>작품 이름을 검색해주세요.</span>
        </SearchBooks>
        <ul>
          <SearchItem>
            <Link href="/webtoon">
              <SearchTitle>
                <MatchTitle>regExp</MatchTitle>
              </SearchTitle>
              <SearchAuthor>author</SearchAuthor>
            </Link>
          </SearchItem>
          <SearchItem>
            <Link href="/webtoon">
              <SearchTitle>
                <MatchTitle>regExp</MatchTitle>
              </SearchTitle>
              <SearchAuthor>author</SearchAuthor>
            </Link>
          </SearchItem>
          <SearchItem>
            <Link href="/webtoon">
              <SearchTitle>
                <MatchTitle>regExp</MatchTitle>
              </SearchTitle>
              <SearchAuthor>author</SearchAuthor>
            </Link>
          </SearchItem>
        </ul>
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  margin-right: 8px;

  ${({ theme }) => theme.media.mobile`
    padding: 9px 16px 5px;
    width: 100%;
  `}
`;

const SearchContainer = styled.div`
  display: none;

  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}

  ${(props: StyleProps) =>
    props.focused &&
    css`
      display: block;
      position: absolute;
      width: 464px;
      margin-top: 10px;
      padding-top: 6px;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.white};
      overflow: hidden;
      opacity: 1;
      transition: opacity 0.2s ease-in-out 0s;
      box-shadow: rgb(0 0 0 / 8%) 5px 5px 10px;
      z-index: 8000;

      ${({ theme }) => theme.media.mobile`
        width: 95%;
      `}
    `}
`;

const SearchBooks = styled.div`
  text-align: center;
  line-height: 18px;
  padding-top: 60px;
  padding-bottom: 60px;
  color: ${({ theme }) => theme.colors.fontGray4};
  font-size: 14px;
  font-weight: 400;
`;

const SearchItem = styled.li`
  padding: 8px 12px;
`;

const SearchTitle = styled.span`
  display: inline-block;
  margin: 0px 5px 3px;
  line-height: 22px;
  font-size: 14px;
`;

const MatchTitle = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const SearchAuthor = styled.span`
  display: inline-block;
  margin: 0px 5px 3px;
  line-height: 22px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fontGray1};
`;

const Container = styled.div`
  width: 259px;
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;

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
