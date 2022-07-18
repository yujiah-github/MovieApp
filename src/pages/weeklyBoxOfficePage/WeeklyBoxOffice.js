import React from "react";
import {useEffect, useState} from 'react';
import WeeklyBoxOfficeList from "./WeeklyBoxOfficeList";

function WeeklyBoxOffice(){
    const [loading, setLoading] = useState(true);
    const [WeeklyBoxOffice, setWeeklyBoxOffice] = useState([]);
    const getMovies = async() => {
        const response = await fetch(
            `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20120101`
        )
        const json = await response.json();
        setWeeklyBoxOffice(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
    };
    
    useEffect(() => {
    getMovies();
    }, []);

    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            )
                : (
                    <div>
                    {WeeklyBoxOffice.map((moive) =>
                    <WeeklyBoxOfficeList 
                    key={moive.rnum}
                    rank={moive.rank}
                    rankInten={moive.rankInten}
                    movieCd={moive.movieCd}
                    movieNm={moive.movieNm}
                    /> 
                )}
                    </div>
                )
            }
        </div>
    );
}

export default WeeklyBoxOffice;