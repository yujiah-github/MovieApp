import React from "react";
import DailyBoxOfficeList from "./DailyBoxOfficeList";
import {useEffect, useState} from 'react';
import styled from 'styled-components';

const DateSelect = styled.input`

`;

function DailyBoxOffice(){
    //오늘 날짜를 가져오는 함수
    /*let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    document.write('year'+'month'+'date')
    document.write(month)
    document.write(date)
    const todayDate = year + month + date;
    */

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

    //검색 날짜 선택
    const [dateValue, setDateValue] = useState("");

    //검색 날짜 변경
    const onChangeDateValue = (event) => {
        setDateValue(event.target.value);
    }

    //선택한 날짜에 따라 api를 다시 불러오기
    const getNewDailyMovies = async() => {
        const response = await fetch(
            `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&itemPerPage=10`
        )
        const json = await response.json();
        setDailyBoxOffice(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
    };

    const onDateSubmit = (event) => {
        event.preventDefault();
        /*useEffect(() => {
            getNewWeeklyMovies();
        }, []);
        */
    }

    return(
        <div>
        {loading ? (
        <h1>Loading...</h1> 
        ) : (
            <div>
                <h1>주간 박스오피스 순위</h1>
                <h2>날짜 선택</h2>
                <DateSelect
                    type="date"
                    id="start"
                    name="trip-start"
                    value={dateValue}
                    onChange={onChangeDateValue}
                    required
                />
                <button onClick={onDateSubmit}>날짜 검색하기</button>
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