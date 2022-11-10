import styled from 'styled-components';
import Button from '../UI/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';

const ViewerHeaderIcon = () => {
  return (
    <div>
      <HeaderButton>
        <AiOutlineHeart />
      </HeaderButton>
      <HeaderButton>
        <BiBell />
      </HeaderButton>
    </div>
  );
};

const HeaderButton = styled(Button)`
  width: 26px;
  height: 26px;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.gray7};
  margin-left: 10px;
`;

export default ViewerHeaderIcon;
