import Link from 'next/link';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import { WebtoonSearchTypes } from '../../types/webtoon-search-types';

const SearchModalItem = (props: WebtoonSearchTypes) => {
  const adultCheckHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    if (props.isAdult !== undefined) {
      if (!props.isAdult && props.webtoon.adult) {
        e.preventDefault();
        alert('미성년자는 볼 수 없는 컨텐츠입니다.');
      }
    }

    if (props.isAdult === undefined) {
      if (props.webtoon.adult) {
        e.preventDefault();
        alert('로그인 후, 볼 수 있는 컨텐츠입니다.');
      }
    }
  };

  return (
    <SearchItem>
      <Link href={`/webtoon/${props.webtoon.id}`} onClick={adultCheckHandler}>
        <SearchTitle>
          <MatchTitle>{props.webtoon.title}</MatchTitle>
        </SearchTitle>
        <SearchAuthor>{props.webtoon.author}</SearchAuthor>
      </Link>
    </SearchItem>
  );
};

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

export default SearchModalItem;
