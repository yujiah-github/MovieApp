import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Movie(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() =>{
        const response = await fetch(`
        http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=18442cacd8ac1c4bb4a671248df4ff43
        `);

        const json = await response.json();
        setMovies(json.movieListResult.movieList);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) :
            (
                <div>
                    {movies.map((movie) =>
                        <MovieList
                        key={movie.movieCd}
                        movieNm={movie.movieNm}
                        movieNmEn={movie.movieNmEn}
                        nationAlt={movie.nationAlt}
                        genreAlt={movie.genreAlt}
                        repNationNm={movie.repNationNm}
                        repGenreNm={movie.repGenreNm}
                        />
                    )}
                </div>
            )
        }
        </div>
    );
}

export default Movie;