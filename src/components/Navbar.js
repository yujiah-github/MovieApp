import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
    background-color: black;
    padding: 5px;
    text-align: center;
    display: flexbox;

    #item{
        list-style-type: none;
    }

    #itemList{
        font-size: 23px;
        text-decoration: none;
        padding: 30px;
        color: white;
        display: inline;
        font-weight: bold;
        text-decoration-line : none;
    }

    #Login {
        font-size: 23px;
        text-decoration: none;
        padding: 30px;
        color: white;
        display: inline;
        font-weight: bold;
        text-decoration-line : none;
    }
`;

function Navbar(){
    return(
        <Nav>
            <ul id="item">
                <Link to={`/`}><span id="itemList">이미지</span></Link>
                <Link to={`/weeklyboxoffice`}><li id="itemList">주간/주말 박스오피스</li></Link>
                <Link to={`/dailyboxoffice`}><li id="itemList">일별 박스오피스</li></Link>
                <Link to={`/movie`}><li id="itemList">영화목록</li></Link>
                <Link to={`/moviecompany`}><li id="itemList">영화사 목록</li></Link>
                <Link to={`/`}><li id="Login">Login</li></Link>
            </ul>
        </Nav>
    );
}

export default Navbar;