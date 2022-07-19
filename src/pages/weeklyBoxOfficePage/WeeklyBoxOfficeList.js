import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px 10px 10px 10px;
    border-right: 1px solid black;

`;

function WeeklyBoxOfficeList({rank, rankInten, movieNm}){
    return(
        <Wrapper>
            <h1>랭킹: {rank}</h1>
            <span>순위 변동: {rankInten}</span>
            <span>영화 제목: {movieNm}</span>
        </Wrapper>
    );
}

WeeklyBoxOfficeList.ProtoType ={
    key: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    rankInten: PropTypes.number.isRequired,
}

export default WeeklyBoxOfficeList;