import Image from 'next/image';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { DataTypes } from '../../types/common/webtoon-types';
import { viewerNavigationState } from '../../states/viewerNavigationState';
import { viewerSettingState } from '../../states/viewerSettingState';
import { viewerThemeState } from '../../states/viewerThemeState';
import { viewerZoomState } from '../../states/viewerZoomState';

const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

const ViewerImage = ({ cover }: { cover: DataTypes }) => {
  const setIsVisible = useSetRecoilState(viewerNavigationState);
  const [isVisibleSetting, setIsVisibleSetting] =
    useRecoilState(viewerSettingState);
  const viewerTheme = useRecoilValue(viewerThemeState);
  const zoom = useRecoilValue(viewerZoomState);

  const visibleHandler = () => {
    if (!isVisibleSetting) setIsVisible(prev => !prev);
    else setIsVisibleSetting(false);
  };

  return (
    <ImageWrapper onClick={visibleHandler} colorTheme={viewerTheme} zoom={zoom}>
      <Image
        src={`/images/${cover}`}
        alt="webtoon"
        width={740}
        height={1064}
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      <Image
        src={`/images/${cover}`}
        alt="webtoon"
        width={740}
        height={1064}
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  padding-top: 50px;
  background: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;

  ${(props: { colorTheme: string; zoom: number }) =>
    props.colorTheme === 'black'
      ? css`
          background: ${({ theme }) => theme.colors.bgNavDark};
        `
      : props.colorTheme === 'sepia'
      ? css`
          background: ${({ theme }) => theme.colors.sepia};
        `
      : css`
          background: ${({ theme }) => theme.colors.white};
        `}

  ${(props: { colorTheme: string; zoom: number }) =>
    props.zoom &&
    css`
      zoom: ${props.zoom}%;
    `}

  img {
    ${({ theme }) => theme.mixins.autoMargin()};
    display: block;
    width: 740px;
  }
`;

export default ViewerImage;
