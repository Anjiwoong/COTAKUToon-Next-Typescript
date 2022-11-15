import Header from '../../../../components/header/Header';
import MyPageContainer from '../../../../components/Layout/MyPageContainer';
import MyRidiCashWrapper from '../../../../components/Layout/MyRidiCashWrapper';
import MyRidiDetail from '../../../../components/mypage/cash/detail/MyRidiDetail';

const MyRidiDetailPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyRidiCashWrapper>
          <MyRidiDetail />
        </MyRidiCashWrapper>
      </MyPageContainer>
    </>
  );
};

export default MyRidiDetailPage;
