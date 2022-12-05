import styled, { css } from 'styled-components';

import { ViewerThemeTypes } from '../../types/viewer/viewer-types';

import Button from '../UI/Button';

const ViewerFooterThemeSettingItem = ({
  color,
  viewerTheme,
  changeThemeHandler,
}: ViewerThemeTypes) => {
  const setThemeHandler = () => changeThemeHandler(color);

  return (
    <li>
      <ThemeButton onClick={setThemeHandler} active={color === viewerTheme}>
        <SrOnly>theme</SrOnly>
      </ThemeButton>
    </li>
  );
};

const ThemeButton = styled(Button)`
  ${(props: { active: boolean }) =>
    props.active &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.borderBtnMode};
    `}
`;

const SrOnly = styled.span`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;
export default ViewerFooterThemeSettingItem;
