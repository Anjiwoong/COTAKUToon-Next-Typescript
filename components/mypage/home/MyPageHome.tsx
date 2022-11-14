import React from 'react';
import styled from 'styled-components';
import MyPageInfo from './MyPageInfo';
import MyPageHomeRecent from './MyPageHomeRecent';

const MyPageHome = () => {
  return (
    <section>
      <A11yHiddenTitle>마이리디 홈</A11yHiddenTitle>
      <MyPageInfo />
      <MyPageHomeRecent />
    </section>
  );
};

const A11yHiddenTitle = styled.h2`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default MyPageHome;
