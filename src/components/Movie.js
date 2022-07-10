import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({rnum, openDt, rank, rankInten, id, movieNm}){
    return(
        <div key={rnum}>
            <Link to={`/movie/${id}`}>{movieNm}</Link>
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
    rankInten: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}


export default Movie;