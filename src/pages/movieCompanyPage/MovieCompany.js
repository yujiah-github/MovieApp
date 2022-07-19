import React from "react";
import {useEffect, useState} from 'react';
import MovieCompanyList from './MovieCompanyList';

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

    return(
        <div>
            {loading ? (
            <h1>Loading...</h1>
            ) : (
            <div>
                <h1>영화사 검색</h1>
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
                {movieCompany.map((company) =>
                    <MovieCompanyList
                    key={company.companyCd}
                    companyNm={company.companyNm}
                    ceoNm={company.ceoNm}
                    filmoNames={company.filmoNames}
                    />
                )}
            </div>
            )
            }
        </div>
    );
}

export default MovieCompany;