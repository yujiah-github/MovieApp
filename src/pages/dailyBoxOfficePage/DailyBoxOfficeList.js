import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: gray;
    margin: 10px;
`;

const RankIntenColor = styled.span`
    rankInten > 0 ? color: red : color: blue;
`;

function DailyBoxOfficeList({rnum, openDt, rank, rankInten, movieId, movieNm}){
    return(
        <Wrapper key={rnum}>
            <Link to={`/movie/${movieId}`}><h2>{movieNm}</h2></Link>
            <p>개봉일: {openDt}</p>
            <p>순위: {rank}</p>
            <p>순위 변동: <RankIntenColor>{rankInten}</RankIntenColor></p>
        </Wrapper>
    );
}

DailyBoxOfficeList.ProtoType ={
    rnum: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    rankInten: PropTypes.number.isRequired,
    movieId: PropTypes.number.isRequired
}


export default DailyBoxOfficeList;