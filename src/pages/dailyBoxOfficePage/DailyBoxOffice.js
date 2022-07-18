import React from "react";
import DailyBoxOfficeList from "./DailyBoxOfficeList";
import {useEffect, useState} from 'react';

function DailyBoxOffice(){
    const [loading, setLoading] = useState(true);
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
    const getMovies = async () => {
    const response = await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20220706&itemPerPage=10`
    )
    const json = await response.json();
    setDailyBoxOffice(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
    };

useEffect(() => {
    getMovies();
}, []);

    return(
        <div>
        {loading ? (
        <h1>Loading...</h1> 
        ) : (
            <div>
            {dailyBoxOffice.map((x) => (
                <DailyBoxOfficeList
                key = {x.rnum}
                movieId={x.movieCd}
                movieNm={x.movieNm}
                openDt={x.openDt}
                rank = {x.rank}
                rankInten={x.rankInten}
                />
            ))} 
        </div>
        )}
    </div>
    );
}

export default DailyBoxOffice;