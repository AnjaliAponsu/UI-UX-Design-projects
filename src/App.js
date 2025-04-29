import './App.css';
import Blog from './MainPages/Blog';
import Home from './MainPages/Home';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Information from './MainPages/Information';
import Feedback from './MainPages/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/b" element={<Blog/>}></Route>
          <Route exact path="/information" element={<Information/>}></Route>
          <Route exact path="/feedback" element={<Feedback/>}></Route>
        </Routes>
      </Router>
       
      
    </div>
  );
}

export default App;
