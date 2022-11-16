import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyRidiCashWrapper from '../../../components/Layout/MyRidiCashWrapper';
import MyPageCash from '../../../components/mypage/cash/MyPageCash';

const MyPageCashPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyRidiCashWrapper>
          <MyPageCash />
        </MyRidiCashWrapper>
      </MyPageContainer>
      <Footer />
    </>
  );
};

export default MyPageCashPage;
