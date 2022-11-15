import styled from 'styled-components';
import MyRidiCashPaymentItem from './MyRidiCashPaymentItem';

const paymentItem = [
  {
    id: 'item1',
    image: '/images/mypage/naverPay.svg',
    content: '',
  },
  {
    id: 'item2',
    image: '/images/mypage/kakaoPay.svg',
    content: '',
  },
  {
    id: 'item3',
    image: '/images/mypage/samsungPay.svg',
    content: '',
  },
  {
    id: 'item4',
    image: '/images/mypage/payco.svg',
    content: '',
  },
  {
    id: 'item5',
    image: '',
    content: '신용카드',
  },
  {
    id: 'item6',
    image: '',
    content: '휴대폰',
  },
  {
    id: 'item7',
    image: '',
    content: '계좌이체',
  },
  {
    id: 'item8',
    image: '',
    content: '컬처랜드문화상품권',
  },
  {
    id: 'item9',
    image: '',
    content: '도서문화상품권',
  },
  {
    id: 'item10',
    image: '',
    content: '해피머니(모바일팝)',
  },
  {
    id: 'item11',
    image: '',
    content: '해외 발행 신용카드',
  },
  {
    id: 'item12',
    image: '',
    content: '무통장입금',
  },
];

const MyRidiCashPayment = () => {
  return (
    <article>
      <PaymentTitle>결제 수단</PaymentTitle>
      <PaymentList>
        {paymentItem.map(item => (
          <MyRidiCashPaymentItem
            key={item.id}
            id={item.id}
            image={item.image}
            content={item.content}
          />
        ))}
      </PaymentList>
    </article>
  );
};

const PaymentTitle = styled.h4`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.btnBlack};
  line-height: 19px;
  margin-top: 20px;
`;

const PaymentList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'wrap')};
  padding: 12px 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export default MyRidiCashPayment;
