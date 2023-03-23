import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };
    colors: {
      primary: string;
      secondary: string;
      blue300: string;
      blue150: string;
      blue100: string;
      blue50: string;
      blue0: string;
      green: string,
      gray600: string,
      yellow100: string,
      yellow150: string,
      black: string;
      white: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}