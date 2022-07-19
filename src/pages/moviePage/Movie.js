import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Movie(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    //영화 api를 불러옴
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

    //검색어 변수
    const [searchKeyword, setSearchKeyword] = useState(null);

    //현재 검색어를 불러옴
    const onChangeSearchKeyword = (event) => {
        setSearchKeyword(event.target.value);
    }
    
    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) :
            (
                <div>
                    <h1>영화 검색</h1>
                    <form>
                    <select name="movieChoice">
                    <option value="first">영화 제목</option>
                    <option value="second">제작 국가</option>
                    <option value="third">영화 장르</option>
                    </select>
                    &nbsp;
                    <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    onChange={onChangeSearchKeyword}
                    >
                    </input>
                    &nbsp;
                    <button>검색하기</button>
                    </form>
                    {movies.map((movie) =>
                        <MovieList
                        key={movie.movieCd}
                        movieNm={movie.movieNm}
                        nationAlt={movie.nationAlt}
                        genreAlt={movie.genreAlt}
                        />
                    )}
                </div>
            )
        }
        </div>
    );
}

export default Movie;