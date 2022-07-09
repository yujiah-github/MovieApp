import PropTypes from 'prop-types';

function Movie({rnum, movieNm, openDt, rank, rankInten}){
    return(
        <div key={rnum}>
            <h2>{movieNm}</h2>
            <p>{openDt}</p>
            <p>{rank}</p>
            <p>{rankInten}</p>
        </div>
    );
}

Movie.ProtoType ={
    rnum: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    rankInten: PropTypes.number.isRequired
}


export default Movie;