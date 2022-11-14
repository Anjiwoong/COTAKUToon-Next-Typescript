import React from 'react';
import styled from 'styled-components';
import MyPageNavigation from './MypageNavigation';

const MyPageContainer = ({ children }: any) => {
  return (
    <Container>
      <MyPageNavigation />
      {children}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) => theme.mixins.paddingX('24px')};
  width: 1000px;
  margin-top: 33px;
`;

export default MyPageContainer;
