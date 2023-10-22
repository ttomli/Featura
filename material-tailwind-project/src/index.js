import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(<h1>Hello</h1>, root);
// ReactDOM.render(<React.StrictMode>
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// </React.StrictMode>, root);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
