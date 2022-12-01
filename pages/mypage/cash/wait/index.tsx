import Footer from '../../../../components/Layout/footer/Footer';
import Header from '../../../../components/Layout/header/Header';
import MyPageContainer from '../../../../components/Layout/MyPageContainer';
import MyRidiCashWrapper from '../../../../components/Layout/MyRidiCashWrapper';
import RidiCashEmpty from '../../../../components/mypage/cash/empty/RidiCashEmpty';

const MyRidiWaitPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyRidiCashWrapper>
          <RidiCashEmpty />
        </MyRidiCashWrapper>
      </MyPageContainer>
      <Footer />
    </>
  );
};

export default MyRidiWaitPage;
