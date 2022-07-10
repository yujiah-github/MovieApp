import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from '../src/routes/Home';
import Detail from '../src/routes/Detail';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/movie/:movieId" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
