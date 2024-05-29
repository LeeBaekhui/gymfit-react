import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drawer from './layouts/Drawer'; // Drawer 컴포넌트를 임포트
import ScheduleForm from './components/scheduleManagements/ScheduleForm'; // ScheduleForm 컴포넌트를 임포트

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerClose = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Drawer open={drawerOpen} handleDrawerClose={handleDrawerClose} />
      <Routes>
        <Route path="/schedule" element={<ScheduleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
