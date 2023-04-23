import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 1880px;
  margin: 0 auto;
  margin-top: 75px;
`;
