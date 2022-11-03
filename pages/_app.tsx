import type { AppProps } from 'next/app';
import '../ui/theme/main.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from '@Ui/theme';

const theme = createTheme(Theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
