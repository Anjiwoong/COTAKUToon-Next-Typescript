import styled from 'styled-components';

import { GoTriangleDown } from 'react-icons/go';
import BusinessContent from './BusinessContent';

const BusinessDetail = () => {
  return (
    <Wrapper>
      <summary>
        리디(주) 사업자 정보
        <GoTriangleDown />
      </summary>
      <BusinessContent />
    </Wrapper>
  );
};

const Wrapper = styled.details`
  color: ${({ theme }) => theme.colors.fontGray1};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.03px;
  margin-bottom: 12px;
  cursor: pointer;

  summary {
    &::marker {
      content: '';
    }
  }

  svg {
    font-size: 11px;
    margin-left: 2px;
    transform: translateY(1px);
  }
`;

export default BusinessDetail;
