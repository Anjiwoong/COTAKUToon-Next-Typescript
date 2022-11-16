import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MyPageContainer from '../../components/Layout/MyPageContainer';
import MyPageHome from '../../components/mypage/home/MyPageHome';

const Mypage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageHome />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export default Mypage;
