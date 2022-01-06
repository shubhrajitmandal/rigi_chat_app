import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6610f2",
    },
    secondary: {
      main: "#6610f2",
    },
    grey: {
      main: "#8F9FA6",
    },
    info: {
      main: "#00a86b",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#121212",
      secondary: "#8F9FA6",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h6: {
      fontWeight: "normal",
      fontSize: 24,
      lineHeight: "150%",
      color: "#403d40",
    },
    body1: {
      fontWeight: "normal",
      fontSize: 20,
      lineHeight: "150%",
      color: "#403d40",
    },
    body2: {
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "150%",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
