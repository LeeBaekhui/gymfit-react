import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch 대신 Routes를 사용
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
