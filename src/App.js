import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Todo List</Link> | <Link to="/employees">Employee List</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  </Router>
);

export default App;
