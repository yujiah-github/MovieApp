import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: gray;
`;

function MovieCompanyList({ companyNm, ceoNm, filmoNames}){
    return(
        <Wrapper>
            <p>{companyNm}</p>
            <p>{ceoNm}</p>
            <p>{filmoNames}</p>
        </Wrapper>
    );
}

export default MovieCompanyList;