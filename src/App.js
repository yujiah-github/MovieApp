import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from '../src/routes/Home';
import Detail from '../src/routes/Detail';
import DailyBoxOffice from './pages/dailyBoxOfficePage/DailyBoxOffice';
import WeeklyBoxOffice from './pages/weeklyBoxOfficePage/WeeklyBoxOffice';
import Movie from './pages/moviePage/Movie';
import MovieCompany from './pages/movieCompanyPage/MovieCompany';

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dailyboxoffice" element={<DailyBoxOffice />} />
        <Route path="/weeklyboxoffice" element={<WeeklyBoxOffice />} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/movie/:movieId" element={<Detail />} />
        <Route path="/moviecompany" element={<MovieCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
