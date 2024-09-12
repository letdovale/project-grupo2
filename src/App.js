import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import GerarRelatorio from './Components/GerarRelatorio/GerarRelatorio';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/gerar-relatorio" element={<GerarRelatorio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
