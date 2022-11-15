import Header from '../../../../components/header/Header';
import MyPageContainer from '../../../../components/Layout/MyPageContainer';
import MyRidiCashWrapper from '../../../../components/Layout/MyRidiCashWrapper';
import MyRidiWait from '../../../../components/mypage/cash/wait/MyRidiWait';

const MyRidiWaitPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyRidiCashWrapper>
          <MyRidiWait />
        </MyRidiCashWrapper>
      </MyPageContainer>
    </>
  );
};

export default MyRidiWaitPage;
