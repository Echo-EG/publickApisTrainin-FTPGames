import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {ftpGamesListAsync} from "../redux/Slice";
import GamesList from "../components/GamesList";

const MainPage = () => {

    const dispatch = useDispatch();

    // const[title, setTitle] = useState('');
    //
    // const handleTextfieldinput = (e) =>{
    //     setTitle(e.target.value)
    // }

    useEffect(() =>{
        dispatch(ftpGamesListAsync())
    }, [])

    return (
        <div>
            {/*<TextField onChange={handleTextfieldinput} value={title}/>*/}
            {/*<Button variant="contained" color="primary">Send</Button>*/}
            <GamesList/>
        </div>
    );
};

export default MainPage;