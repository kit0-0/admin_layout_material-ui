import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import React from 'react';



function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />

      </BrowserRouter>
    </>
  );
}

export default App;
