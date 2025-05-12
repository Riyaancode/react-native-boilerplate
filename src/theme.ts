import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  lightColors: {
    primary: '#F2B705',
    secondary: '#02261C',
    tertiary: '#C6FF29',
    background: '#ffffff',
    foreground: '#030712',
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9F38',
    info: '#295BFF',
    neutralGrey: '#98958d',
  },
  darkColors: {
    primary: '#F2B705',
    secondary: '#02261C',
    tertiary: '#C6FF29',
    background: '#030712',
    foreground: '#ffffff',
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9F38',
    info: '#295BFF',
    neutralGrey: '#98958d',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});
