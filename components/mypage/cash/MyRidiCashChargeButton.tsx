import styled from 'styled-components';
import Button from '../../UI/Button';
import { FaCoins } from 'react-icons/fa';

const MyRidiCashChargeButton = () => {
  return (
    <ChargeButtonWrapper>
      <Button>
        <FaCoins />
        리디캐시 충전
      </Button>
    </ChargeButtonWrapper>
  );
};

export const ChargeButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
    transform: translateY(2px);
  }

  button {
    width: 240px;
    padding: 14px 34px;
    background: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
    border-radius: 4px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
  }
`;

export default MyRidiCashChargeButton;
