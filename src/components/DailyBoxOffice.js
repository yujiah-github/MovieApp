import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function DailyBoxOffice({rnum, openDt, rank, rankInten, movieId, movieNm}){
    return(
        <div key={rnum}>
            <Link to={`/movie/${movieId}`}>{movieNm}</Link>
            <p>{openDt}</p>
            <p>{rank}</p>
            <p>{rankInten}</p>
        </div>
    );
}

DailyBoxOffice.ProtoType ={
    rnum: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    rankInten: PropTypes.number.isRequired,
    movieId: PropTypes.number.isRequired
}


export default DailyBoxOffice;