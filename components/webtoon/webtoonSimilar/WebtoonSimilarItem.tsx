import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const WebtoonSimilarItem = () => {
  return (
    <li>
      <Link href="/webtoon">
        <ThumbnailImage
          src="/images/cover/bookcover43.webp"
          alt="thumbnail"
          width={90}
          height={130}
        />
      </Link>
    </li>
  );
};

const ThumbnailImage = styled(Image)`
  width: 90px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 3px;
`;

export default WebtoonSimilarItem;
