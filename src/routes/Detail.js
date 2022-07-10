import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Detail(){
    const {movieId} = useParams()
    const getMovie = async() => {
        const reponse = await fetch(
            `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=18442cacd8ac1c4bb4a671248df4ff43&targetDt=20220706&movieId=${movieId}`
        )
        const json = await reponse.json();
        console.log(json);
    }
    
    useEffect(() => {
        getMovie();
    }, [])
    return(
        <h1>Detail</h1>
    );
}

export default Detail;