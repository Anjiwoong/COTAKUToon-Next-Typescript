import Link from 'next/link';
import styled from 'styled-components';
import Button from '../UI/Button';
import { IoChevronBack } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';

const ViewerFooterTopNav = () => {
  return (
    <div>
      <Inner>
        <div>
          <p>상수리나무 아래 1화</p>
        </div>
        <ControlWrapper>
          <Link href="/webtoon/">
            <ControlButton>
              <Prev>
                <IoChevronBack />
              </Prev>
              <span>이전화</span>
            </ControlButton>
          </Link>
          <Link href="/webtoon">
            <ControlButton>
              <span>다음화</span>
              <Next>
                <IoChevronForward />
              </Next>
            </ControlButton>
          </Link>
        </ControlWrapper>
      </Inner>
    </div>
  );
};

const Inner = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingX('15px')};
  max-width: 700px;
  height: 37px;
`;

const ControlWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  gap: 18px;

  a {
    display: block;
  }
`;

const ControlButton = styled(Button)`
  ${({ theme }) => theme.mixins.flexCenter()};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray7};
`;

const Prev = styled.span`
  svg {
    font-size: 16px;
    width: 14px;
    transform: translateY(1px);
  }
`;

const Next = styled.span`
  svg {
    font-size: 16px;
    width: 14px;
    transform: translateY(1px);
  }
`;

export default ViewerFooterTopNav;
