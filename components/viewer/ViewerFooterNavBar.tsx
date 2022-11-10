import styled from 'styled-components';
import ViewerFooterNavBarItem from './ViewerFooterNavBarItem';

const ViewerFooterNavBar = () => {
  return (
    <Wrapper>
      <ul>
        <ViewerFooterNavBarItem />
        <ViewerFooterNavBarItem />
        <ViewerFooterNavBarItem />
        <ViewerFooterNavBarItem />
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
