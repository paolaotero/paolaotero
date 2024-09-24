"use client";

import "./globals.css";
import Logo from "./components/logo/logo";

import { ThemeProvider } from "styled-components";
import Content from "./components/content/content";
import { Container, Header } from "./layout.styles";
import Link from "./components/link/link";

const theme = {
  colors: {
    primary: "#00000",
    secondary: "#5E8BFF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Container>
            <Header>
              <Logo />
              <Link url="/contact">info</Link>
            </Header>

            <Content>{children}</Content>

            <footer>
              <Link url="/contact">Contact</Link>
            </footer>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
