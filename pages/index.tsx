import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <div>Test</div>
      <button>Test</button>
      <Test>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque
        libero excepturi obcaecati optio soluta adipisci, non quaerat molestiae,
        illo doloremque saepe iusto doloribus quisquam incidunt expedita! Sunt,
        quis asperiores.
      </Test>

      <Test2>
        <FlexBox>center</FlexBox>
      </Test2>
    </>
  );
};

const Test = styled.p`
  color: red;

  ${({ theme }) => theme.media.tablet`
  color: blue
  `}

  ${({ theme }) => theme.media.mobile`
  color: yellow
  `}
`;

const Test2 = styled.div`
  width: 1000;
`;

const FlexBox = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};
  width: 400px;
  height: 400px;
  background-color: red;

  ${({ theme }) => theme.mixins.autoMargin()}
`;

export default HomePage;
