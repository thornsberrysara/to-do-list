import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: ${props =>
    props.theme.mode === "dark" ? "monospace" : "Thasadith"};
}
body {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#1f1f1f" : "#fce8e4"};
}
.App {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#111" : "#f7cbc2"};
}
input {
  color: ${props => (props.theme.mode === "dark" ? "#39ff14" : "#282c34")};
}
#to-do-form input {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#1f1f1f" : "#fce8e4"};
}
button {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#39ff14" : "#fac43b"};
  color: ${props => (props.theme.mode === "dark" ? "#111" : "#282c34")};
}
i {
  color: ${props => (props.theme.mode === "dark" ? "#1f1f1f" : "#fce8e4")};
}
i:hover {
  color: ${props => (props.theme.mode === "dark" ? "#333333" : "#e4e4e4")};
}
`;

function Theme() {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Theme;
