import React from "react";
import {useEffect, useState} from 'react';
import WeeklyBoxOfficeList from "./WeeklyBoxOfficeList";
import styled from 'styled-components';
import {H1} from '../../components/StyledComponents';
import Navbar from "../../components/Navbar";
import { Section } from "../../components/Section";


const DateSelect = styled.input`

`;

function WeeklyBoxOffice(){
    const [loading, setLoading] = useState(true);
    const [WeeklyBoxOffice, setWeeklyBoxOffice] = useState([]);
    const getWeeklyMovies = async() => {
        const response = await fetch(
            `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20120101`
        )
        const json = await response.json();
        setWeeklyBoxOffice(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
    };
    
    useEffect(() => {
    getWeeklyMovies();
    }, []);

    //검색 날짜 선택
    const [dateValue, setDateValue] = useState("");

    //검색 날짜 변경
    const onChangeDateValue = (event) => {
        setDateValue(event.target.value);
    }

    //선택한 날짜에 따라 api를 다시 불러오기
    const getNewWeeklyMovies = async() => {
        const response = await fetch(
            `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=${dateValue}`
        )
        const json = await response.json();
        setWeeklyBoxOffice(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
    };

    const onDateSubmit = (event) => {
        event.preventDefault();
        /*useEffect(() => {
            getNewWeeklyMovies();
        }, []);
        */
    }

    {WeeklyBoxOffice.map((moive) =>
            <WeeklyBoxOfficeList 
                key={moive.rnum}
                rank={moive.rank}
                rankInten={moive.rankInten}
                movieCd={moive.movieCd}
                movieNm={moive.movieNm}
            /> 
    )}

    return(
        <div>
            <Navbar />
                <Section>
                <H1>주간 박스오피스 순위</H1>
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
                </Section>
        </div>

    );
}

export default WeeklyBoxOffice;