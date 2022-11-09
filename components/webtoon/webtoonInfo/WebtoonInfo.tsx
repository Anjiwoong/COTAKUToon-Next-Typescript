import styled from 'styled-components';
import WebtoonInfoBody from './webtoonInfoBody/WebtoonInfoBody';
import WebtoonInfoFooter from './webtoonInfoFooter/WebtoonInfoFooter';

const WebtoonInfo = () => {
  return (
    <BookInfo>
      <WebtoonInfoBody />
      <WebtoonInfoFooter />
    </BookInfo>
  );
};

const BookInfo = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 40px 29px;
`;

export default WebtoonInfo;
