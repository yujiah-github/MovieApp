import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20220706&itemPerPage=10`
      )
    const json = await response.json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
      <h1>Loading...</h1> 
      ) : (
      <div>
        {movies.map(movie => (
          <div key={movie.rnum}>
            <h2>{movie.movieNm}</h2>
            <p>{movie.openDt}</p>
            <p>{movie.rankInten}</p>
          </div>
        ))}
      </div>
      )}
    </div>
)
}

export default App;
