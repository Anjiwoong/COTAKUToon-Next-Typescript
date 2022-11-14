import React from 'react';
import Header from '../../../components/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPageRecent from '../../../components/mypage/recent/MyPageRecent';

const RecentViewPage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageRecent />
      </MyPageContainer>
    </>
  );
};

export default RecentViewPage;
