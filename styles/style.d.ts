import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      sepia: string;
    };

    media: {
      mobile: any;
      tablet: any;
    };

    mixins: {
      flexBox: any;
      flexCenter: any;
      autoMargin: any;
      centerTranslateY: any;
      centerTranslateX: any;
    };
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
