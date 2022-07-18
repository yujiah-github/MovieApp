import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <ul>
                <Link to={`/weeklyboxoffice`}><li>주간/주말 박스오피스</li></Link>
                <Link to={`/dailyboxoffice`}><li>일별 박스오피스</li></Link>
                <Link to={`/movie`}><li>영화목록</li></Link>
                <Link to={`/moviecompany`}><li>영화사 목록</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;