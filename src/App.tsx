import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
// import StudentList from '../src/pages/studentlist';
// import BatchList from '../src/pages/batchlist';
import './App.css';
import Mobilization from './components/mobilization';
import Assessment from './components/assessment';
import StudentGrade from './components/studentgrade';
import Placements from './components/placements';

const MainPage: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/mobilization">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/mobilization" element={<Mobilization />} />
          <Route path="/assessment" element={<Assessment options={[]}  />} />
          <Route path="/studentgrade" element={<StudentGrade  />} />
          <Route path="/placements" element={<Placements   />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return <h2>Welcome to Student Batch Tracking System!</h2>;
};

export default MainPage;


