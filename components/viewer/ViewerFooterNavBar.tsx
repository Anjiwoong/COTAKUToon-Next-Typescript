import styled from 'styled-components';

import ViewerFooterNavBarItem from './ViewerFooterNavBarItem';

const viewerFooterItem = ['연재 홈', '선호작품 목록', '댓글', '보기 설정'];

const ViewerFooterNavBar = () => {
  return (
    <Wrapper>
      <ul>
        {viewerFooterItem.map(item => (
          <ViewerFooterNavBarItem key={item} title={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 700px;

  ul {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'space-around', 'center', 'nowrap')};
    height: 50px;
  }
`;

export default ViewerFooterNavBar;
