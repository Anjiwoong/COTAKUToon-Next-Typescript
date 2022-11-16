import styled from 'styled-components';

const cautionList = [
  '결제 취소는 결제 후 7일 이내에만 가능합니다. 단, 리디캐시 또는 적립된 리디포인트의 일부를 사용하면 결제 취소할 수 없습니다.',
  '리디캐시는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없을 경우, <상법 제64조 상사채권 소멸시효> 조항에 따라 소멸됩니다.',
  '일부를 사용한 리디캐시는 환불받을 수 있으며 충전 시 무료로 지급받은 리디포인트를 공제한 후, 잔액 환급 비율(90%)에 해당하는 금액을 환불해 드립니다.',
  '리디캐시 충전시에는 문화비소득공제 신청을 할 수 없습니다.',
];

const MyRidiAutoChargeCaution = () => {
  return (
    <ul>
      {cautionList.map(caution => (
        <CautionList key={caution}>{caution}</CautionList>
      ))}
    </ul>
  );
};

const CautionList = styled.li`
  position: relative;
  padding: 3px 8px;
  color: ${({ theme }) => theme.colors.fontGray2};
  font-weight: 400;
  font-size: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.fontGray2};
    margin-right: 4px;
  }
`;

export default MyRidiAutoChargeCaution;
