import styled from 'styled-components';

import { BsCheck } from 'react-icons/bs';

const MyRidiAutoChargeNotice = () => {
  const month = new Date().getMonth() + 1;

  return (
    <NoticeWrapper>
      <p>
        <BsCheck /> 매월 <span>1일</span> 리디캐시
        <span>30,000원</span> 이 자동충전됩니다.
      </p>
      <p>결제 예정일:2022.{month < 10 ? `0${month}` : month}.01 10:00:00</p>
    </NoticeWrapper>
  );
};

const NoticeWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'center', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingY('20px')};
  border: 4px solid ${({ theme }) => theme.colors.borderGray2};

  p {
    &:nth-child(1) {
      font-weight: 700;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.fontGray7};
      margin-bottom: 4px;

      svg {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.blue};
        transform: translateY(4px);
      }

      span {
        color: ${({ theme }) => theme.colors.blue};
        margin-left: 2px;
      }
    }

    &:nth-child(2) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.fontGray7};
      text-indent: 22px;
    }
  }
`;

export default MyRidiAutoChargeNotice;
