// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch 대신 Routes를 사용
import "./App.css";
import MiniVariantDrawer from "./layouts/MiniVariantDrawer";
import SignIn from "./components/templates/SignIn"; // SignUp 컴포넌트를 가져옵니다.
import FacilityManagement from "./components/centerManagements/FacilityManagements/FacilityManagement";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignIn />} />
        <Route path="/" element={<MiniVariantDrawer />} />
        <Route path="/" element={<FacilityManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
