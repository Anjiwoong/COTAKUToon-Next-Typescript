import React from 'react';
import Header from '../../../components/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPageCash from '../../../components/mypage/cash/MyPageCash';

const MyPageCashPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageCash />
      </MyPageContainer>
    </>
  );
};

export default MyPageCashPage;
