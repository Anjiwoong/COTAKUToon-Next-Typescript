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
    </>
  );
};

export default Mypage;
