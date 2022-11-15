import styled from 'styled-components';
import MyRidiCashNavigation from './MyRidiCashNavigation';

const MyRidiCashWrapper = ({ children }: any) => {
  return (
    <CashWrapper>
      <MyRidiCashNavigation />
      {children}
    </CashWrapper>
  );
};

const CashWrapper = styled.section`
  width: 720px;
  padding: 0 0 80px 0;
`;

export default MyRidiCashWrapper;
