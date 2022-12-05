import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import ViewerFooterThemeSettingItem from './ViewerFooterThemeSettingItem';
import { viewerThemeState } from '../../states/viewerThemeState';

import { FaPaintRoller } from 'react-icons/fa';

const themeList = ['white', 'sepia', 'black'];

const ViewerFooterThemeSetting = () => {
  const [viewerTheme, setViewerTheme] = useRecoilState(viewerThemeState);

  const changeThemeHandler = (color: string) => setViewerTheme(color);

  return (
    <>
      <IconItem>
        <FaPaintRoller />
      </IconItem>
      <li>
        <ColorSetting>
          {themeList.map(color => (
            <ViewerFooterThemeSettingItem
              key={color}
              color={color}
              viewerTheme={viewerTheme}
              changeThemeHandler={changeThemeHandler}
            />
          ))}
        </ColorSetting>
      </li>
    </>
  );
};

const IconItem = styled.li`
  padding: 8px 12px 0;
  line-height: 48px;

  svg {
    font-size: 24px;
  }
`;

const ColorSetting = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
  margin-left: 8px;
  padding: 8px 0;

  li {
    margin-right: 10px;

    &:hover {
      button {
        border: 1px solid ${({ theme }) => theme.colors.borderBtnMode};
      }
    }

    &:nth-child(1) {
      button {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }

    &:nth-child(2) {
      button {
        background-color: ${({ theme }) => theme.colors.sepia};
      }
    }

    &:last-child {
      button {
        background-color: ${({ theme }) => theme.colors.black};
      }
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 32px;
    }
  }
`;

export default ViewerFooterThemeSetting;
