import styled from 'styled-components';

import NewArrivalSectionItem from './NewArrivalSectionItem';

const newArrivalList = [
  '신간',
  '이벤트',
  '독점',
  '리다무',
  '19+',
  '이달의 신작',
  '위클리 쿠폰',
];

const NewArrivalSection = () => {
  // li  컴포넌트화
  return (
    <Wrapper>
      <ul>
        {newArrivalList.map(item => (
          <NewArrivalSectionItem key={item} title={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 30px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 0;
  `}

  ul {
    ${({ theme }) => theme.mixins.flexCenter()};

    ${({ theme }) => theme.media.mobile`
      ${theme.mixins.autoMargin()};
    `};
  }

  li {
    text-align: center;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    ${({ theme }) => theme.media.mobile`
      margin-right: 10px;
    `};
  }

  span {
    font-size: 13px;

    ${({ theme }) => theme.media.mobile`
      font-size: 11px;
    `};
  }
`;

export default NewArrivalSection;
