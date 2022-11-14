import React from 'react';
import styled from 'styled-components';
import MyPageInfo from './MyPageInfo';
import MyRecentView from './MyRecentView';

const MyPageHome = () => {
  return (
    <section>
      <A11yHiddenTitle>마이리디 홈</A11yHiddenTitle>
      <MyPageInfo />
      <MyRecentView />
    </section>
  );
};

const A11yHiddenTitle = styled.h2`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default MyPageHome;
