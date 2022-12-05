import styled from 'styled-components';

import { DataTypes } from '../../../types/common/webtoon-types';

import MyPageInfo from './MyPageInfo';
import MyPageHomeRecent from './MyPageHomeRecent';

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
