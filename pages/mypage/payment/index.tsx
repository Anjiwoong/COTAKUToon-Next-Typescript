import Footer from '../../../components/Layout/footer/Footer';
import Header from '../../../components/Layout/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPagePayment from '../../../components/mypage/payment/MyPagePayment';

const MyPagePaymentPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPagePayment />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export default MyPagePaymentPage;
