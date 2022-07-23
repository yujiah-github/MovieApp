import React from "react";
import DailyBoxOfficeList from "./DailyBoxOfficeList";
import {useEffect, useState} from 'react';
import { H1 } from "../../components/StyledComponents";
import Navbar from "../../components/Navbar";
import { DateSelect } from "../../components/DateSelect";
import {Section} from "../../components/Section";
import { FaSearch} from 'react-icons/fa';


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

    return(
            <div>
                <Navbar />
                <Section>
                    <H1>일일 박스오피스 순위</H1>
                    <DateSelect>
                        <h3>날짜 선택</h3>
                            <input
                            type="date"
                            class="dateSelect"
                            name="trip-start"
                            value={dateValue}
                            onChange={onChangeDateValue}
                            required
                            >
                            </input>
                            <span class="search"><FaSearch onClick={onDateSubmit} /></span>
                    </DateSelect>
                </Section>
        </div>
    );
}

export default DailyBoxOffice;