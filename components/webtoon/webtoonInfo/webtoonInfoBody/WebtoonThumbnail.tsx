import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { DataTypes } from '../../../../types/common/webtoon-types';

import Button from '../../../UI/Button';
import { AiOutlineHeart, AiFillHeart, AiOutlineCheck } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import Toaster from '../../../Layout/Toaster';

const WebtoonThumbnail = (props: DataTypes) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [notice, setNotice] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [toasterText, setToasterText] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [favorite, notice]);

  const favoriteHandler = () => {
    if (active) return;

    setFavorite(prev => !prev);
    setShow(true);
    setActive(true);

    if (favorite) setToasterText('선호작품에서 삭제되었습니다');
    else setToasterText('선호작품에 등록되었습니다');
  };

  const noticeHandler = () => {
    if (active) return;

    setNotice(prev => !prev);
    setShow(true);
    setActive(true);

    if (notice) setToasterText('신간알람에서 삭제되었습니다');
    else setToasterText('신간알람에 등록되었습니다');
  };

  const closeToasterHandler = () => {
    setShow(false);
    setActive(false);
  };

  return (
    <ThumbnailWrap>
      <Image
        src={`/images/${props.cover}`}
        alt="thumbnail"
        width={200}
        height={290}
        priority
      />
      <HeartButton onClick={favoriteHandler}>
        {!favorite && <AiOutlineHeart />}
        {favorite && <AiFillHeart />}
      </HeartButton>
      <NotificationButton onClick={noticeHandler} active={notice}>
        {!notice && <BsPlusLg />}
        {notice && <AiOutlineCheck />}
        <span>시리즈 신간알림</span>
      </NotificationButton>
      {show && (
        <Toaster
          active={show}
          text={toasterText}
          closeHandler={closeToasterHandler}
        />
      )}
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
    font-size: 16px;
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

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      color: ${({ theme }) => theme.colors.secondaryFont};
      border: 1px solid ${({ theme }) => theme.colors.secondaryFont};

      &:hover {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
      }
    `}
`;

export default WebtoonThumbnail;
