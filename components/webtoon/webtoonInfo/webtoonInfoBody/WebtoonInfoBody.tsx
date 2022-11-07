import styled from 'styled-components';
import WebtoonDetail from './WebtoonDetail';
import WebtoonThumbnail from './WebtoonThumbnail';

const WebtoonInfoBody = () => {
  return (
    <BookInfoBodyWrapper>
      <WebtoonThumbnail />
      <WebtoonDetail />
    </BookInfoBodyWrapper>
  );
};

const BookInfoBodyWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')};
`;

export default WebtoonInfoBody;
