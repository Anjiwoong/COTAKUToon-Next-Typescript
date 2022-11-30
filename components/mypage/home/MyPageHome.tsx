import styled from 'styled-components';
import MyPageInfo from './MyPageInfo';
import MyPageHomeRecent from './MyPageHomeRecent';
import { DataTypes } from '../../../types/webtoon-types';

const MyPageHome = ({ recent }: { recent?: DataTypes[] }) => {
  return (
    <section>
      <A11yHiddenTitle>마이리디 홈</A11yHiddenTitle>
      <MyPageInfo />
      <MyPageHomeRecent recent={recent} />
    </section>
  );
};

const A11yHiddenTitle = styled.h2`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default MyPageHome;
