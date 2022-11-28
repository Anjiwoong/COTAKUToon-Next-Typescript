import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styled from 'styled-components';

import { DataTypes } from '../../types/webtoon-types';
import SearchModalItem from './SearchModalItem';

const SearchModal = ({
  webtoon,
  value,
}: {
  webtoon: DataTypes[];
  value: string;
}) => {
  const { data: session } = useSession();

  return (
    <SearchContainer>
      {value === '' && (
        <SearchBooks>
          <span>작품 이름을 검색해주세요.</span>
        </SearchBooks>
      )}
      {value !== '' && webtoon.length === 0 && (
        <SearchBooks>
          <span>검색한 작품이 없습니다.</span>
        </SearchBooks>
      )}
      {value !== '' && (
        <ul>
          {webtoon.map(data => (
            <SearchModalItem
              key={data.id}
              webtoon={data}
              isAdult={session?.user?.image}
            />
          ))}
        </ul>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
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
  z-index: 10000;

  ${({ theme }) => theme.media.mobile`
    width: 100%;
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

export default SearchModal;
