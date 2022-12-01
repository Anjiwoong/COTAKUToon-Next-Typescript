import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import { viewerSettingState } from '../../states/viewerSettingState';
import { viewerThemeState } from '../../states/viewerThemeState';

import ViewerFooterThemeSetting from './ViewerFooterThemeSetting';
import ViewerFooterWidthSetting from './ViewerFooterWidthSetting';

const ViewerFooterSetting = () => {
  const isVisibleSetting = useRecoilValue(viewerSettingState);
  const viewerTheme = useRecoilValue(viewerThemeState);

  return (
    <SettingWrapper isVisible={isVisibleSetting}>
      <SrOnly>뷰어 설정 팝업</SrOnly>
      <SettingList colorTheme={viewerTheme}>
        <ViewerFooterThemeSetting />
      </SettingList>
      <SettingList colorTheme={viewerTheme}>
        <ViewerFooterWidthSetting colorTheme={viewerTheme} />
      </SettingList>
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  z-index: -1;
  width: 640px;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, calc(-100% - 51px), 0);
  box-shadow: 0 0 10px 0;
  transition: transform 0.5s ease;

  ${(props: { isVisible: boolean }) =>
    !props.isVisible &&
    css`
      transform: translate3d(-50%, 0, 0);
    `}
`;

const SrOnly = styled.h2`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

const SettingList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
  background-color: ${({ theme }) => theme.colors.bgNavDark};
  height: 48px;
  box-shadow: 1px 1px ${({ theme }) => theme.colors.bgBarGray2};
  border-radius: 3px 3px 0 0;
  transition: all 0.5s ease;

  &:last-child {
    border-radius: 0;
  }

  ${(props: { colorTheme: string }) =>
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
`;

export default ViewerFooterSetting;
