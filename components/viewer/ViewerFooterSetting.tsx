import styled from 'styled-components';
import ViewerFooterThemeSetting from './ViewerFooterThemeSetting';
import ViewerFooterWidthSetting from './ViewerFooterWidthSetting';

const ViewerFooterSetting = () => {
  return (
    <SettingWrapper>
      <SrOnly>뷰어 설정 팝업</SrOnly>
      <SettingList>
        <ViewerFooterThemeSetting />
      </SettingList>
      <SettingList>
        <ViewerFooterWidthSetting />
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

  &:last-child {
    border-radius: 0;
  }
`;

export default ViewerFooterSetting;
