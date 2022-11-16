import Footer from '../../../../components/footer/Footer';
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
      <Footer />
    </>
  );
};

export default AutoChargePage;
