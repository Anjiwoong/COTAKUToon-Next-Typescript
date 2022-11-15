import MyRidiCashCautionItem from './MyRidiCashCautionItem';

const cautionList = [
  '매월 1 ~ 3일에는 리디캐시 충전 시 적립되는 리디포인트가 두 배!',
  '결제 취소는 결제 후 7일 이내에만 할 수 있습니다. 단, 리디캐시 또는 적립된 리디포인트의 일부를 사용하면 결제 취소할 수 없습니다.',
  '리디캐시와 리디포인트는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없으며 1년 동안 리디 서비스에 접속하지 않은 경우, <상법 제 64조 상사채권 소멸시효> 조항에 따라 소멸됩니다.',
  '일부를 사용한 리디캐시는 환불받을 수 있으며 충전 시 무료로 지급받은 리디포인트를 공제한 후, 잔액 환급 비율(90%)에 해당하는 금액을 환불해 드립니다.',
  '리디캐시 충전시에는 문화비소득공제 신청을 할 수 없습니다.',
];

const MyRidiCashCaution = () => {
  return (
    <ul>
      {cautionList.map(caution => (
        <MyRidiCashCautionItem content={caution} />
      ))}
    </ul>
  );
};

export default MyRidiCashCaution;
