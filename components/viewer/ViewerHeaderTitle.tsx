import Link from 'next/link';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const ViewerHeaderTitle = () => {
  return (
    <TitleWrapper>
      <h1>
        <Link href="/webtoon">
          <BsArrowLeft />
          <SrOnly>돌아가기</SrOnly>
          <Title>상수리나무 아래</Title>
        </Link>
      </h1>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  h1 {
    margin-left: 5px;
  }

  a {
    font-weight: 500;
    line-height: 50px;
  }

  svg {
    font-size: 22px;
    transform: translateY(5px);
  }
`;

const SrOnly = styled.span`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

const Title = styled.span`
  margin-left: 5px;
`;

export default ViewerHeaderTitle;
