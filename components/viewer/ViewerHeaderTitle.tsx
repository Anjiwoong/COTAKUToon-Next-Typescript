import Link from 'next/link';
import styled from 'styled-components';

import { DataTypes } from '../../types/common/webtoon-types';

import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';

const ViewerHeaderTitle = ({ title }: DataTypes) => {
  const router = useRouter();

  return (
    <TitleWrapper>
      <h1>
        <Link href={`/webtoon/${router.query.webtoonId}`}>
          <BsArrowLeft />
          <SrOnly>돌아가기</SrOnly>
          <Title>
            {title} {router.query.webtoonView?.slice(2)}화
          </Title>
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
