import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Login>
      <div class="login__header">
        <h1>
          <a href="/" class="link-mainpage">
            COTAKU
          </a>
        </h1>
      </div>
      <form class="login-form" method="POST">
        <fieldset>
          <legend>로그인</legend>
          <input
            type="text"
            name="userid"
            class="user-id"
            placeholder="아이디"
            autocomplete="off"
          />
          <input
            type="password"
            name="password"
            class="user-pw"
            placeholder="비밀번호"
          />
          <div class="login__info">
            <div class="login__info__left">
              <input type="checkbox" class="login-check" id="login-chk" />
              <label for="login-chk">
                <span class="save-box"></span>
                <span>로그인 상태 유지</span>
              </label>
            </div>
            <div class="login__info__right">
              <span role="button" class="search-id">
                아이디 찾기
              </span>
              <span role="button" class="search-pw">
                비밀번호 재설정
              </span>
            </div>
          </div>
          <span class="login__error-message"></span>
          <button class="login-btn">로그인</button>
        </fieldset>
      </form>
      <a href="/signup" class="login__signup-link">
        <button class="signin-btn">회원가입</button>
      </a>
    </Login>
  );
};

const Login = styled.div`
  width: 100%;
  min-height: 100vh;
  background: $bg-blue;
  letter-spacing: -0.4px;
`;

const LoginHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid $border-gray3;
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
  color: $blue;
`;

export default LoginPage;
