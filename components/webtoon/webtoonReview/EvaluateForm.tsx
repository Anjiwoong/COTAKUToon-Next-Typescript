import styled from 'styled-components';
import Button from '../../UI/Button';
import { MdError } from 'react-icons/md';

const EvaluateForm = () => {
  return (
    <div>
      <FormWrapper>
        <textarea
          title="리뷰 입력"
          placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
        ></textarea>
        <ButtonWrapper>
          <TipButton>
            <MdError />
            <span>리뷰 작성 유의사항</span>
          </TipButton>
          <ReviewButton type="submit">리뷰 남기기</ReviewButton>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

const FormWrapper = styled.form`
  textarea {
    max-width: 605px;
    min-width: 605px;
    border: 2px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 112px;
    font-weight: 700;
    font-size: 13px;
    padding: 12px 15px;
    color: ${({ theme }) => theme.colors.fontGray3};

    &:focus {
      outline-color: ${({ theme }) => theme.colors.borderGray7};
    }
    &:focus::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
    }
  }
`;

const ButtonWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  margin-top: 10px;
`;

const TipButton = styled(Button)`
  letter-spacing: -0.6px;
  border-radius: 4px;
  font-weight: 700;
  transition: background-color 0.2s, color 0.2s;
  color: ${({ theme }) => theme.colors.fontGray2};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
  font-size: 12px;
  padding: 8px 18px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray2};
  }

  svg {
    margin-right: 2px;
    font-size: 15px;
    transform: translate3d(0, 1.9px, 0);
  }
`;

const ReviewButton = styled(Button)`
  letter-spacing: -0.03em;
  border-radius: 4px;
  font-weight: 700;
  transition: background-color 0.2s, color 0.2s;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
  box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
  font-size: 12px;
  padding: 8px 18px;
  background: ${({ theme }) => theme.colors.blue};

  /* &.opacity {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;

    &:hover {
      background: $blue;
    }
  } */
`;

export default EvaluateForm;
