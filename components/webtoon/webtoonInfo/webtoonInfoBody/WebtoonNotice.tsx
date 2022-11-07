import Link from 'next/link';
import styled from 'styled-components';

const WebtoonNotice = () => {
  return (
    <ul>
      <NoticeItem>
        <NoticeInfo>연재</NoticeInfo>
        <InfoTitle>매주 금요일 연재</InfoTitle>
      </NoticeItem>
      <NoticeItem>
        <BenefitsTitle>혜택</BenefitsTitle>
        <BenefitsInfo>
          <Link href="#">
            <InfoTitle>대여 할인권 5장 증정</InfoTitle>
            <InfoText>1인 1회 발급 가능, 3일 대여</InfoText>
          </Link>
        </BenefitsInfo>
      </NoticeItem>
      <NoticeItem>
        <EventTitle>이벤트</EventTitle>
        <EventInfo>
          <InfoTitle>
            <Link href="#">#시즌3 런칭! 전원 1,000포인트 증정♥</Link>
          </InfoTitle>
          <InfoTitle>요일 웹툰 한번에 모아보기☆</InfoTitle>
          <InfoText>
            <Link href="#">이벤트 더보기</Link>
          </InfoText>
        </EventInfo>
      </NoticeItem>
      <NoticeItem>
        <FreeTitle>리다무</FreeTitle>
        <div>
          <InfoTitle>1일 마다 1편 기다리면 무료 </InfoTitle>
        </div>
      </NoticeItem>
    </ul>
  );
};

const NoticeItem = styled.li`
  ${({ theme }) => theme.mixins.paddingY('6px')};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray6};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray6};
  }
`;

const InfoTitle = styled.span`
  ${({ theme }) => theme.mixins.paddingY('4px')};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.fontGray5};
`;

const NoticeTitle = styled.span`
  display: block;
  width: 40px;
  height: 18px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  margin-right: 16px;
`;

const NoticeInfo = styled(NoticeTitle)`
  background: ${({ theme }) => theme.colors.bgSkyBlue};
  color: ${({ theme }) => theme.colors.fontSkyBlue};
`;

const BenefitsTitle = styled(NoticeTitle)`
  background: ${({ theme }) => theme.colors.bgGreen};
  color: ${({ theme }) => theme.colors.fontGreen};
`;

const EventTitle = styled(NoticeTitle)`
  background: ${({ theme }) => theme.colors.bgPurple};
  color: ${({ theme }) => theme.colors.fontPurple};
`;

const FreeTitle = styled(NoticeTitle)`
  background: ${({ theme }) => theme.colors.bgBlue};
  color: ${({ theme }) => theme.colors.fontSkyBlue};
`;

const BenefitsInfo = styled.div`
  a {
    ${({ theme }) =>
      theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  }
`;

const EventInfo = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
`;

const InfoText = styled.span`
  color: ${({ theme }) => theme.colors.fontGray2};
  margin-top: 8px;
  font-size: 12px;
`;

export default WebtoonNotice;
