import React from "react";
import {useEffect, useState} from 'react';
import MovieCompanyList from './MovieCompanyList';
import {Section} from '../../components/Section';
import Navbar from "../../components/Navbar";
import {MovieSearch} from '../../components/MovieSearch';
import {H1} from '../../components/StyledComponents';
import { FaSearch} from 'react-icons/fa';

function MovieCompany(){
    const [loading, setLoading] = useState(true);
    const [movieCompany, setMovieCompany] = useState([]);

    const getMovieCompany = async () => {
        const response = await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json?key=18442cacd8ac1c4bb4a671248df4ff43`
        )
        const json = await response.json();
        setMovieCompany(json.companyListResult.companyList)
        setLoading(false);
    }

    useEffect(() => {
        getMovieCompany();
    }, [])

    //검색어 변수
    const [searchKeyword, setSearchKeyword] = useState(null);

    //현재 검색어를 불러옴
    const onChangeSearchKeyword = (event) => {
        setSearchKeyword(event.target.value);
    }

    {movieCompany.map((company) =>
    <MovieCompanyList
        key={company.companyCd}
        companyNm={company.companyNm}
        ceoNm={company.ceoNm}
        filmoNames={company.filmoNames}
    />
    )}

    return(
        <div>
                <Navbar />
                <Section>
                    <H1>영화사 검색</H1>
                    <MovieSearch>
                        <select>
                        <option value="first">영화 제목</option>
                        <option value="second">제작 국가</option>
                        <option value="third">영화 장르</option>
                        </select>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={searchKeyword}
                            onChange={onChangeSearchKeyword}
                        >
                        </input>
                        <FaSearch />
                    </MovieSearch>
                </Section>
            </div>
    );
}

export default MovieCompany;