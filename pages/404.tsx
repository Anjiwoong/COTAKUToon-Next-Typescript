import Image from 'next/image';
import styled from 'styled-components';

import Footer from '../components/Layout/footer/Footer';
import Header from '../components/Layout/header/Header';

const ErrorPage = () => {
  return (
    <>
      <Header sub />
      <NotFoundWrapper>
        <h1>미구현 페이지</h1>
        <Image
          src="/images/notFound/pixeltaku.png"
          alt="404"
          width={990}
          height={557}
          priority
        />
      </NotFoundWrapper>
      <Footer />
    </>
  );
};

const NotFoundWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 1170px;
  text-align: center;

  h1 {
    ${({ theme }) => theme.mixins.a11yHidden()};
  }
`;

export default ErrorPage;
