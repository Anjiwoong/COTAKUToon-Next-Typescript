import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      darkGray: string;
      sepia: string;
      blue: string;
      red: string;
      lightBlue: string;

      primaryColor: string;
      primaryFont: string;

      secondaryFont: string;
      myTitle: string;
      mySecondaryTitle: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;

      fontGray1: string;
      fontGray2: string;
      fontGray3: string;
      fontGray4: string;
      fontGray5: string;
      fontGray6: string;
      fontGray7: string;
      fontSkyBlue: string;
      fontGreen: string;
      fontPurple: string;
      myAssetAmount: string;
      myAssetLink: string;
      navDarkGray: string;
      error: string;

      borderGray1: string;
      borderGray2: string;
      borderGray3: string;
      borderGray4: string;
      borderGray5: string;
      borderGray6: string;
      borderGray7: string;
      borderBlue1: string;
      borderBlue2: string;
      borderGreen: string;
      borderButtonGray: string;
      borderHrGray1: string;
      borderHrGray2: string;
      borderBtnMode: string;
      borderNavSepia: string;
      borderNavDark: string;

      bgSkyBlue: string;
      bgBlue: string;
      bgPurple: string;
      bgCharcoal: string;
      bgBtnGray: string;
      bgLightBlue: string;
      bgLightBlue2: string;
      bgGreen: string;
      bgBarGray1: string;
      bgBarGray2: string;
      bgBarGray3: string;
      bgNavSepia1: string;
      bgNavSepia2: string;
      bgNavDark: string;
      bgNavZoom: string;
      bgModel1: string;
      bgModel2: string;

      accentFont: string;

      btnBlack: string;
      upBtn: string;
      timeBtn: string;
      freeBtn: string;

      eventSwitch: string;
      eventUp: string;
      eventEarly: string;
      eventCash: string;

      ridiRed: string;
      ridiPurple: string;
      ridiYellow1: string;
      ridiYellow2: string;
      ridiTurquoise: string;
    };

    media: {
      mobile: any;
      tablet: any;
    };

    mixins: {
      flexBox: (
        direction?: 'row' | string,
        justify?: 'flex-start' | string,
        align?: 'stretch' | string,
        wrap?: 'nowrap' | string
      ) => string;
      flexCenter: () => string;
      autoMargin: () => string;
      centerTranslateY: () => string;
      centerTranslateX: () => string;
      marginX: (marginX: string) => string;
      marginY: (marginY: string) => string;
      paddingX: (paddingX: string) => string;
      paddingY: (paddingY: string) => string;
      a11yHidden: () => string;
      removeBtnStyle: () => string;
      ellipsisLine: () => string;
    };
  }
}
