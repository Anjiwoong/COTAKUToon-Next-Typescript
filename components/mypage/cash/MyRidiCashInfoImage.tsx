import Image from 'next/image';
import styled from 'styled-components';

const MyRidiCashInfoImage = () => {
  return (
    <ImageWrapper>
      <Image
        src="/images/mypage/ridicash@2x.png"
        alt="ridicash-icon"
        width={568}
        height={384}
        priority
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;

  img {
    position: absolute;
    width: 269px;
    height: 177px;
    right: 0;
    top: -40px;
  }
`;

export default MyRidiCashInfoImage;
