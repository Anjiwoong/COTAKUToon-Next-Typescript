import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
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
