import Image from 'next/image';
import styled from 'styled-components';

const MyRidiAutoChargeInfo = () => {
  return (
    <InfoWrapper>
      <h3>리디캐시 자동충전 혜택</h3>
      <InfoSub>매월 1일 자동충전 설정하고 아래 혜택들을 놓치지 마세요!</InfoSub>
      <InfoDesc>
        <BenefitInfo>
          <Image
            src="/images/mypage/double.jpg"
            alt="두배로 쌓인 동전"
            width={80}
            height={50}
          />
          <div>
            <span>일이삼 더블 포인트 자동 적용</span>
            <span>리디포인트 2배 적립</span>
          </div>
        </BenefitInfo>
        <BenefitInfo>
          <Image
            src="/images/mypage/rain_snow.jpg"
            alt="비와 우산"
            width={80}
            height={50}
          />
          <div>
            <span>눈/비 오는 날 리디포인트 1,000원</span>
            <span>
              알림 클릭 시 선착순 없이 지급
              <br />
              (※ 1만원 이상 자동충전 전용 혜택)
            </span>
          </div>
        </BenefitInfo>
      </InfoDesc>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  padding: 30px 80px 20px 0;

  h3 {
    font-weight: 400;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.myTitle};
    height: 35px;
  }
`;

const InfoSub = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 400;
`;

const InfoDesc = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  padding-left: 32px;
  border: 4px solid ${({ theme }) => theme.colors.borderGray2};
  margin-top: 14px;
`;

const BenefitInfo = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  ${({ theme }) => theme.mixins.paddingY('30px')};
  width: 100%;

  img {
    width: 80px;
    height: 50px;
  }

  div {
    ${({ theme }) =>
      theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
    margin-left: 20px;
    font-weight: 700;
    font-size: 13px;

    span {
      &:nth-child(1) {
        margin-top: 3px;
      }

      &:nth-child(2) {
        color: ${({ theme }) => theme.colors.gray7};
        margin-top: 10px;
      }
    }
  }
`;

export default MyRidiAutoChargeInfo;
