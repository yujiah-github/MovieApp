import React, { useEffect, useState } from "react";
import Movie from "../components/DailyBoxOffice";

function Home() {
    /*
    <div>
            {movies.map((movie) => (
                <Movie
                key = {movie.rnum}
                movieId={movie.movieCd}
                movieNm={movie.movieNm}
                openDt={movie.openDt}
                rank = {movie.rank}
                rankInten={movie.rankInten}
                />
            ))} 
        </div>
    */
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
        <nav>
            <ul>
                <li>일별 박스오피스</li>
                <li>주간/주말 박스오피스</li>
                <li>영화목록</li>
                <li>영화사목록</li>
            </ul>
        </nav>
        )}
    </div>
)
}

export default Home;
