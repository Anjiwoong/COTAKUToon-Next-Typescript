import styled from 'styled-components';
import { FaPaintRoller } from 'react-icons/fa';
import Button from '../UI/Button';

const ViewerFooterThemeSetting = () => {
  // li 컴포넌트
  return (
    <>
      <IconItem>
        <FaPaintRoller />
      </IconItem>
      <li>
        <ColorSetting>
          <li>
            <Button>
              <SrOnly>theme</SrOnly>
            </Button>
          </li>
          <li>
            <Button>
              <SrOnly>theme</SrOnly>
            </Button>
          </li>
          <li>
            <SelectedButton>
              <SrOnly>theme</SrOnly>
            </SelectedButton>
          </li>
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

const SrOnly = styled.span`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

const SelectedButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.borderBtnMode};
`;

export default ViewerFooterThemeSetting;
