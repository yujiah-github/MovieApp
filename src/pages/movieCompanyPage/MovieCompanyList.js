import React from "react";

function MovieCompanyList({key, companyNm, companyNmEn, companyPartNames, ceoNm, filmoNames}){
    return(
        <div key={key}>
            <p>{companyNm}</p>
            <p>{companyNmEn}</p>
            <p>{companyPartNames}</p>
            <p>{ceoNm}</p>
            <p>{filmoNames}</p>
        </div>
    );
}

export default MovieCompanyList;