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
  align-items: center
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
};

export default mixins;
