import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM을 사용하여 App 컴포넌트를 #root 요소에 렌더링합니다.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
