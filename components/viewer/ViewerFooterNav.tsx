import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import { viewerNavigationState } from '../../states/viewerNavigationState';
import { viewerThemeState } from '../../states/viewerThemeState';
import { ViewerTypes } from '../../types/viewer/viewer-types';

import ViewerFooterBottomNav from './ViewerFooterBottomNav';
import ViewerFooterTopNav from './ViewerFooterTopNav';

const ViewerFooterNav = ({ title }: ViewerTypes) => {
  const isVisible = useRecoilValue(viewerNavigationState);
  const viewerTheme = useRecoilValue(viewerThemeState);

  return (
    <FooterNav isVisible={isVisible} colorTheme={viewerTheme}>
      <ViewerFooterTopNav title={title} />
      <ViewerFooterBottomNav />
    </FooterNav>
  );
};

const FooterNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.colors.bgNavDark};
  font-size: 13px;
  transform: translate3d(0, 0, 0);
  transition: all 0.5s ease;

  ${(props: { isVisible: boolean; colorTheme: string }) =>
    !props.isVisible &&
    css`
      transform: translate3d(0, 100%, 0);
    `}

  ${(props: { isVisible: boolean; colorTheme: string }) =>
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
          background: ${({ theme }) => theme.colors.borderGray2};
          border-top: 1px solid ${({ theme }) => theme.colors.borderGray6};
        `}
`;

export default ViewerFooterNav;
