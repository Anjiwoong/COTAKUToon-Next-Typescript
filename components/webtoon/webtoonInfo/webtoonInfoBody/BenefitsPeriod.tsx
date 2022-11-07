import styled from 'styled-components';

const BenefitsPeriod = () => {
  return <Period> 혜택 기간: 10.12.(수)~11.25.(금)</Period>;
};

const Period = styled.span`
  position: relative;
  display: block;
  margin-top: 20px;
  text-align: right;
  color: ${({ theme }) => theme.colors.fontGray2};
  font-size: 12px;

  &::before {
    content: '';
    display: inline-block;
    position: relative;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.fontGray2};
    top: -2px;
    left: -1px;
  }
`;

export default BenefitsPeriod;
