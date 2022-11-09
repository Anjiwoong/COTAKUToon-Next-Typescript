const mixins = {
  flexBox: (
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    wrap: 'nowrap'
  ) => `
    display: flex;
    flex-flow: ${direction} ${wrap};
    justify-content: ${justify};
    align-items: ${align};
  `,

  flexCenter: () => `
  display : flex;
  justify-content: center;
  align-items: center;
  `,

  autoMargin: () => `
  margin-left: auto;
  margin-right: auto;
  `,

  centerTranslateY: () => `
  top: 50%;
  transform: translateY(-50%);
  `,

  centerTranslateX: () => `
  left: 50%;
  transform: translateX(-50%);
  `,

  marginX: (marginX: 0) => `
  margin-left: ${marginX};
  margin-right: ${marginX};
  `,

  marginY: (marginY: 0) => `
  margin-top: ${marginY};
  margin-bottom: ${marginY};
  `,

  paddingX: (paddingX: 0) => `
  padding-left: ${paddingX};
  padding-right: ${paddingX};
  `,

  paddingY: (paddingY: 0) => `
  padding-top: ${paddingY};
  padding-bottom: ${paddingY};
  `,

  a11yHidden: () => `
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  `,

  removeBtnStyle: () => `
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  `,
};

export default mixins;
