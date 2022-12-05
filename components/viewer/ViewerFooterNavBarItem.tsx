import styled, { css } from 'styled-components';
import { MouseEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { ViewerTypes } from '../../types/viewer/viewer-types';
import { viewerSettingState } from '../../states/viewerSettingState';
import { viewerThemeState } from '../../states/viewerThemeState';

import Button from '../UI/Button';
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsPalette } from 'react-icons/bs';
import { notImplementedHandler } from '../../lib/not-implemented';

const ViewerFooterNavBarItem = ({ title }: ViewerTypes) => {
  const setIsVisibleSetting = useSetRecoilState(viewerSettingState);
  const viewerTheme = useRecoilValue(viewerThemeState);
  const router = useRouter();

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (title === '연재 홈') router.push(`/webtoon/${router.query.webtoonId}`);
    else if (title === '보기 설정') setIsVisibleSetting(prev => !prev);
    else notImplementedHandler(e);
  };

  return (
    <li>
      <FooterNavItemButton onClick={clickHandler}>
        {title === '연재 홈' && <AiOutlineHome />}
        {title === '선호작품 목록' && <AiOutlineHeart />}
        {title === '댓글' && <BiMessageDetail />}
        {title === '보기 설정' && <BsPalette />}
        <Title>{title}</Title>
        {title === '댓글' && <Comment colorTheme={viewerTheme}>4,398</Comment>}
      </FooterNavItemButton>
    </li>
  );
};

const FooterNavItemButton = styled(Button)`
  position: relative;
  color: ${({ theme }) => theme.colors.gray7};
  font-size: 24px;
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'center', 'nowrap')};
`;

const Title = styled.span`
  font-size: 11px;
  margin-top: 3px;
`;

const Comment = styled.span`
  position: absolute;
  top: -3px;
  right: -20px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 25px;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  letter-spacing: -0.5px;
  padding: 2px 4px;
  transition: all 0.5s ease;

  ${(props: { colorTheme: string }) =>
    props.colorTheme === 'black'
      ? css`
          border: 2px solid ${({ theme }) => theme.colors.bgNavDark};
        `
      : props.colorTheme === 'sepia'
      ? css`
          border: 2px solid ${({ theme }) => theme.colors.sepia};
        `
      : css`
          border: 2px solid ${({ theme }) => theme.colors.white};
        `}
`;

export default ViewerFooterNavBarItem;
