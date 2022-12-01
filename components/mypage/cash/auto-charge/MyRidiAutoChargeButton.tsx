import styled from 'styled-components';
import { notImplementedHandler } from '../../../../lib/not-implemented';
import Button from '../../../UI/Button';

const MyRidiAutoChargeButton = () => {
  return (
    <ChargeButtonWrapper>
      <Button onClick={notImplementedHandler}>자동충전 설정</Button>
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

export default MyRidiAutoChargeButton;
