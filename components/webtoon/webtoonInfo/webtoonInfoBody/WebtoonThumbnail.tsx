import Image from 'next/image';
import styled from 'styled-components';

import Button from '../../../UI/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { DataTypes } from '../../../../types/webtoon-types';

const WebtoonThumbnail = (props: DataTypes) => {
  return (
    <ThumbnailWrap>
      <Image
        src={`/images/${props.cover}`}
        alt="thumbnail"
        width={200}
        height={290}
        priority
      />
      <HeartButton>
        <AiOutlineHeart />
        <span>0</span>
      </HeartButton>
      <NotificationButton>
        <BsPlusLg />
        <span>시리즈 신간알림</span>
      </NotificationButton>
    </ThumbnailWrap>
  );
};

const ThumbnailWrap = styled.div`
  width: 200px;
`;

const HeartButton = styled(Button)`
  display: block;
  width: 130px;
  margin: 16px auto 0;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderGray2};
  }

  svg {
    color: ${({ theme }) => theme.colors.red};
    vertical-align: middle;
    margin-right: 4px;
    font-size: 16px;
  }

  span {
    color: ${({ theme }) => theme.colors.fontGray1};
  }
`;

const NotificationButton = styled(Button)`
  display: block;
  min-width: 168px;
  padding: 8px 8px 7px 8px;
  font-size: 12px;
  letter-spacing: -0.3px;
  border-radius: 4px;
  font-weight: 700;
  transition: background-color 0.2s, color 0.2s;
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  margin: 16px auto 0;

  &:hover {
    background: ${({ theme }) => theme.colors.bgBlue};
    color: ${({ theme }) => theme.colors.blue};
  }

  svg {
    transform: translate(-3px, 1px);
  }
`;

export default WebtoonThumbnail;
