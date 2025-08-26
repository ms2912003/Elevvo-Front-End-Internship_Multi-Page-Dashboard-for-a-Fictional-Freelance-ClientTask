import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;