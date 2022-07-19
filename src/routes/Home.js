import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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
    const getMovie = async () => {
    const response = await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20220706&itemPerPage=10`
    )
    const json = await response.json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
    };

useEffect(() => {
    getMovie();
}, []);

return (
    <div>
            <Navbar />
    </div>
)
}

export default Home;
