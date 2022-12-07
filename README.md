# 📚 기존 COTAKU 프로젝트를 Next.js + Typescript로 만든 프로젝트입니다.

- 배포: https://cotaku-toon-next.vercel.app/

### 프로젝트 설명

기존 VanillaJS로 만들었었던 Ridi웹툰의 clone 프로젝트를 NextJS + Typescript로 만들어 본 프로젝트 입니다.

기존 VanillaJS 프로젝트는 팀원 3명과 같이 한 프로젝트 였지만 이 프로젝트는 혼자서 만들어 본 프로젝트이고 만들었던 기능들을 보지 않고 오로지 혼자서 생각해서 만들어본 프로젝트입니다.

### 기술 스택

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"> <br /> <img src="https://img.shields.io/badge/recoil-blue?style=for-the-badge&logo=redux"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <br />
<img src="https://img.shields.io/badge/NextAuth-black?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">

### 기능 구현 사진

- 기존 vanillaJS로 만들었던 프로젝트와 기능은 동일하니 이쪽 Repo에서 보시면 감사하겠습니다.
  https://github.com/Anjiwoong/RIDIProject

### 기능 구현

- #### /Home
  - webtoon.json의 데이터를 getStaticProps로 데이터를 패칭해서 사용
  - 홈화면의 최상단 Carousel을 제외한 나머지 Carousel은 react-slick 라이브러리를 사용해서 Carousel 기능을 구현
    - 이미 Carousel 기능을 구현을 해봤기 때문에 라이브러리 사용을 연습하기 위해 사용
  - 최상단 Carousel은 라이브러리에 없기 때문에 직접 구현
    - infinite Carousel이기 때문에 useEffect를 이용한 setTimeout을 통해 구현
    - https://github.com/Anjiwoong/COTAKUToon-Next-Typescript/issues/64 setTimeout 사용 실수로 인한 ISSUE정리
  - next-auth를 이용한 useSession() 훅으로 로그인 유저의 성인 여부를 알아 내 성인 일때와 미성년자 일 경우 다른 웹툰 썸네일 표시
  - Image 태그에 `placeholder="blur" blurDataURL={blurDataURL}` 속성을 추가해 렌더링이 아직 안됐을때 회색 배경의 블러처리된 이미지를 먼저 보여주고 렌더링된다.
- #### /Login
  - next-auth를 이용해 로그인 기능 구현
    - 회원가입시 MongoDB에 저장, 로그인은 next-auth(credentials)를 이용해 DB에 접근해 로그인 기능을 구현했다.
    - useSession() 훅을 통해 컴포넌트에서 로그인한 유저의 name,email,isAdult값을 알 수 있다.
- #### /signup
  - 회원가입 버튼 클릭시 MongoDB에 있는 유저 아이디 확인후 아이디 중복이 아니라면 회원가입 완료
- #### /mypage
  - mypage는 로그인 여부에 따라 접근이 불가능하게 getServerSideProps로 매 요청시마다 로그인 여부를 확인해 Redirect 설정
  - 웹툰 클릭시 로그인 유저의 DB에 웹툰 정보를 추가해 최근 조회한 목록에 로그인한 유저의 클릭했던 웹툰들이 나오게 구현
  - use-webtoon custom-hook을 만들어 swr로 DB에 접근해 최근 조회한 목록 데이터를 가져왔다.
  - 로그아웃 버튼 클릭하면 next-auth에서 제공하는 signOut()을 실행시켜 로그아웃 되도록 구현
- #### /webtoon/[webtoonId] - WebtoonPage

  - 클릭한 웹툰의 아이디가 path값으로 전달되기 때문에 getStaticProps에서 ` const webtoonId = params?.webtoonId?.toString();`으로 클릭한 웹툰의 데이터 추출
  - 별점 / 댓글 기능은 DB에 저장하지 않고 RecoilState를 활용해 댓글을 추가 기능 구현
  - 별점 역시 라이브러리를 이용해 구현하려 했지만 https://github.com/Anjiwoong/COTAKUToon-Next-Typescript/issues/47 ISSUE로 인해 직접 구현

- #### /webtoon/[webtoonId]/[webtoonView] - WebtoonViewerPage

  - n8tb1t/use-scroll-position 라이브러리를 이용해 window.scrollY값을 얻어 viewer setting 컴포넌트를 보이게 구현

  ```js
  useScrollPosition(
    ({ currPos }) => {
      const scrollY = Math.abs(currPos.y);

      if (!isVisibleSetting) {
        if (scrollY >= 55) setIsVisible(false);
        else setIsVisible(true);
      }
    },
    [isVisible, isVisibleSetting],
    undefined,
    false,
    // throttle
    100
  );
  ```

### Commit Convention

| Tag Name  | Description                                                                                   |
| :-------: | :-------------------------------------------------------------------------------------------- |
|   Feat    | 새로운 기능을 추가                                                                            |
|    Fix    | 버그 수정                                                                                     |
|  Design   | CSS 등 사용자 UI 디자인 변경                                                                  |
| !BREAKING | CHANGE 커다란 API 변경의 경우                                                                 |
|  !HOTFIX  | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |
|   Style   | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                                         |
| Refactor  | 프로덕션 코드 리팩토링                                                                        |
|  Comment  | 필요한 주석 추가 및 변경                                                                      |
|   Docs    | 문서 수정                                                                                     |
|   Test    | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
|   Chore   | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
|  Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
|  Remove   | 파일을 삭제하는 작업만 수행한 경우                                                            |
