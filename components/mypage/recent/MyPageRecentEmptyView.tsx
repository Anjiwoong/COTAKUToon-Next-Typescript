import styled from 'styled-components';
import { BiBookOpen } from 'react-icons/bi';

const MyPageRecentEmptyView = () => {
  return (
    <EmptyWrapper>
      <BiBookOpen />
      <span>최근 조회한 작품이 없습니다.</span>
    </EmptyWrapper>
  );
};

const EmptyWrapper = styled.div`
  ${({ theme }) => theme.mixins.paddingY('160px')};

  svg {
    ${({ theme }) => theme.mixins.autoMargin()};
    display: block;
    font-size: 84px;
    margin-bottom: 15px;
  }

  span {
    display: block;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.fontGray7};
  }
`;

export default MyPageRecentEmptyView;
