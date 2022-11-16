import Image from 'next/image';
import styled from 'styled-components';

const ViewerImage = () => {
  return (
    <ImageWrapper>
      <Image
        src="/images/cover/bookcover09.webp"
        alt="webtoon"
        width={740}
        height={1064}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  padding-top: 55px;
  background: ${({ theme }) => theme.colors.black};

  img {
    ${({ theme }) => theme.mixins.autoMargin()};
    display: block;
    width: 740px;
  }
`;

export default ViewerImage;
