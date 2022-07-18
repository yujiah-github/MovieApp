import React from "react";

function WeeklyBoxOfficeList({key, rank, rankInten, movieCd, movieNm}){
    return(
        <div key={key}>
            <p>{rank}</p>
            <p>{rankInten}</p>
            <p>{movieCd}</p>
            <p>{movieNm}</p>
        </div>
    );
}

export default WeeklyBoxOfficeList;