import styled from 'styled-components';
import { BsLaptop } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const ViewerFooterWidthSetting = () => {
  return (
    <>
      <IconItem>
        <BsLaptop />
      </IconItem>
      <Desc>
        콘텐츠 너비 <span>100%</span>
      </Desc>
      <ButtonList>
        <ButtonWrapper>
          <div>
            <AiOutlineMinus />
          </div>
          <div>
            <AiOutlinePlus />
          </div>
        </ButtonWrapper>
      </ButtonList>
    </>
  );
};

const IconItem = styled.li`
  padding: 8px 12px 0;
  line-height: 48px;

  svg {
    font-size: 24px;
  }
`;

const Desc = styled.li`
  margin-left: 8px;
  font-weight: 700;
  font-size: 15px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.navDarkGray};

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.fontGray2};
    padding-left: 3px;
  }
`;

const ButtonList = styled.li`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-end', 'stretch', 'nowrap')};
  margin-left: auto;
  margin-right: 15px;
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};

  div {
    ${({ theme }) => theme.mixins.flexCenter()};
    width: 48px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray4};
    padding-top: 2px;
    text-align: center;
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.borderBlue2};
    color: ${({ theme }) => theme.colors.borderBlue2};

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgNavZoom};
    }

    &:nth-child(1) {
      border-radius: 30px 0 0 30px;
    }

    &:last-child {
      border-radius: 0 30px 30px 0;
    }
  }
`;

export default ViewerFooterWidthSetting;
