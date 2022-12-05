import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import { viewerThemeState } from '../../states/viewerThemeState';

import ViewerFooterNavBar from './ViewerFooterNavBar';
import ViewerFooterSetting from './ViewerFooterSetting';

const ViewerFooterBottomNav = () => {
  const viewerTheme = useRecoilValue(viewerThemeState);

  return (
    <BottomWrapper colorTheme={viewerTheme}>
      <ViewerFooterNavBar />
      <ViewerFooterSetting />
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.5s ease;

  ${(props: { colorTheme: string }) =>
    props.colorTheme === 'black'
      ? css`
          background: ${({ theme }) => theme.colors.bgNavDark};
          border-top: 1px solid ${({ theme }) => theme.colors.borderNavDark};
        `
      : props.colorTheme === 'sepia'
      ? css`
          background: ${({ theme }) => theme.colors.sepia};
          border-top: 1px solid ${({ theme }) => theme.colors.borderNavSepia};
        `
      : css`
          background: ${({ theme }) => theme.colors.white};
          border-top: 1px solid ${({ theme }) => theme.colors.borderGray6};
        `}
`;

export default ViewerFooterBottomNav;
