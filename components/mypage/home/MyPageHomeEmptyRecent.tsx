import styled from 'styled-components';

const MyPageHomeEmptyRecent = () => {
  return (
    <EmptyWrapper>
      <p>최근 조회한 작품이 없습니다.</p>
    </EmptyWrapper>
  );
};

const EmptyWrapper = styled.div`
  ${({ theme }) => theme.mixins.paddingY('90px')};
  margin-top: 20px;
  border: 4px solid ${({ theme }) => theme.colors.borderGray2};

  p {
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.borderGray4};
    text-align: center;
  }
`;

export default MyPageHomeEmptyRecent;
