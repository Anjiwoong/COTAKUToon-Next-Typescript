import styled from 'styled-components';
import MyAssetDownInfo from './MyAssetDownInfo';
import MyAssetTopInfo from './MyAssetTopInfo';

const MyAssetInfo = () => {
  return (
    <Wrapper>
      <MyAssetTopInfo />
      <BorderLine />
      <MyAssetDownInfo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.paddingY('27px')};
  width: 100%;
`;

const BorderLine = styled.hr`
  display: block;
  width: calc(100% - 60px);
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderHrGray1};
  margin: 28px auto 29px;
`;

export default MyAssetInfo;
