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

    return(
        <div>
            {loading ? (
            <h1>Loading...</h1>
            ) : (
            <div>
                {movieCompany.map((company) =>
                    <MovieCompanyList
                    key={company.companyCd}
                    companyNm={company.companyNm}
                    companyNmEn={company.companyNmEn}
                    companyPartNames={company.companyPartNames}
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