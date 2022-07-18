import React from "react";

function MovieList({key, movieNm, movieNmEn, nationAlt, genreAlt, repNationNm, repGenreNm}){
    return(
        <div key={key}>
            <p>{movieNm}</p>
            <p>{movieNmEn}</p>
            <p>{nationAlt}</p>
            <p>{repNationNm}</p>
            <p>{genreAlt}</p>
            <p>{repGenreNm}</p>
        </div>
    );
}

export default MovieList;