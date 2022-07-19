import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    background-color: gray;
`;

function MovieList({movieNm, nationAlt, genreAlt}){
    return(
        <Wrapper>
            <p>{movieNm}</p>
            <p>{nationAlt}</p>
            <p>{genreAlt}</p>
        </Wrapper>
    );
}

MovieList.ProtoTypes ={
    movieNm: PropTypes.string.isRequired,
    nationAlt: PropTypes.string.isRequired,
    genreAlt: PropTypes.string.isRequired,
}

export default MovieList;