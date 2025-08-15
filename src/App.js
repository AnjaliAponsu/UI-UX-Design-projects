import './App.css';
import Blog from './MainPages/Blog';
import Home from './MainPages/Home';
import Information from './MainPages/Information';
import Feedback from './MainPages/Feedback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/UI-UX-Design-projects">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/b" element={<Blog />} />
          <Route path="/information" element={<Information />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
