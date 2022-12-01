import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { viewerNavigationState } from '../../states/viewerNavigationState';

import { viewerThemeState } from '../../states/viewerThemeState';
import { ViewerTypes } from '../../types/viewer-types';

import ViewerHeaderTitle from './ViewerHeaderTitle';

const ViewerHeader = ({ title }: ViewerTypes) => {
  const isVisible = useRecoilValue(viewerNavigationState);
  const viewerTheme = useRecoilValue(viewerThemeState);

  return (
    <Header isVisible={isVisible} colorTheme={viewerTheme}>
      <Inner>
        <ViewerHeaderTitle title={title} />
      </Inner>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderNavDark};
  transform: translate3d(0, 0, 0);
  transition: all 0.5s ease;

  ${(props: { isVisible: boolean; colorTheme: string }) =>
    !props.isVisible &&
    css`
      transform: translate3d(0, -100%, 0);
    `}

  ${(props: { isVisible: boolean; colorTheme: string }) =>
    props.colorTheme === 'black'
      ? css`
          background: ${({ theme }) => theme.colors.bgNavDark};
        `
      : props.colorTheme === 'sepia'
      ? css`
          background: ${({ theme }) => theme.colors.sepia};
          border-bottom: 1px solid ${({ theme }) => theme.colors.borderNavSepia};
        `
      : css`
          background: ${({ theme }) => theme.colors.white};
          border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray6};
        `}
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingX('12px')};
  max-width: 740px;
  height: 50px;
`;

export default ViewerHeader;
