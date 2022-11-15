import Header from '../../../../components/header/Header';
import MyPageContainer from '../../../../components/Layout/MyPageContainer';
import MyRidiCashWrapper from '../../../../components/Layout/MyRidiCashWrapper';
import MyRidiAutoCharge from '../../../../components/mypage/cash/auto-charge/MyRidiAutoCharge';

const AutoChargePage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyRidiCashWrapper>
          <MyRidiAutoCharge />
        </MyRidiCashWrapper>
      </MyPageContainer>
    </>
  );
};

export default AutoChargePage;
