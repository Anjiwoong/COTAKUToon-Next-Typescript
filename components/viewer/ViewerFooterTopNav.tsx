import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { ViewerTypes } from '../../types/viewer/viewer-types';
import { viewerSettingState } from '../../states/viewerSettingState';

import Button from '../UI/Button';
import { IoChevronBack } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';

const ViewerFooterTopNav = ({ title }: ViewerTypes) => {
  const router = useRouter();
  const isVisibleSetting = useRecoilValue(viewerSettingState);

  const prevEpisodeHandler = () => {
    if (router.query.webtoonView && +router.query.webtoonView.slice(2) > 1)
      router.push(
        `/webtoon/${router.query.webtoonId}/ep${
          +router.query.webtoonView?.slice(2) - 1
        }`
      );
    else alert('첫 화 입니다.');
  };

  const nextEpisodeHandler = () => {
    if (router.query.webtoonView && +router.query.webtoonView.slice(2) < 15)
      router.push(
        `/webtoon/${router.query.webtoonId}/ep${
          +router.query.webtoonView?.slice(2) + 1
        }`
      );
    else alert('마지막 화 입니다.');
  };

  return (
    <Wrapper isVisible={isVisibleSetting}>
      <FooterWrapper>
        <div>
          <p>
            {title} {router.query.webtoonView?.slice(2)}화
          </p>
        </div>
        <ControlWrapper>
          <ControlButton onClick={prevEpisodeHandler}>
            <Prev>
              <IoChevronBack />
            </Prev>
            <span>이전화</span>
          </ControlButton>
          <ControlButton onClick={nextEpisodeHandler}>
            <span>다음화</span>
            <Next>
              <IoChevronForward />
            </Next>
          </ControlButton>
        </ControlWrapper>
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease;

  ${(props: { isVisible: boolean }) =>
    props.isVisible &&
    css`
      transform: translate3d(0, 100%, 0);
    `}
`;

const FooterWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingX('15px')};
  max-width: 700px;
  height: 37px;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease;
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
