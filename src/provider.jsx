import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
html, body {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0
}
body {
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}
`;

const theme = {
  background: "hsl(0, 0%, 100%)",
};

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Laura Gallisá</title>
      </Helmet>
      <GlobalStyles />
      <Normalize />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Provider;
