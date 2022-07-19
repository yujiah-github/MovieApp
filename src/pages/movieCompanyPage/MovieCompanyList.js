import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

MovieCompanyList.ProtoTypes ={
    companyNm: PropTypes.string.isRequired,
    ceoNm: PropTypes.string.isRequired,
    filmoNames: PropTypes.string.isRequired,
}


export default MovieCompanyList;