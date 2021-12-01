import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {ftpGamesListAsync} from "../redux/Slice";
import GamesList from "../components/GamesList";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    background: {
        background: "#3f51b5"
    }
})



const MainPage = () => {

    const classes = useStyles();
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
        <div className={classes.background}>
            <Typography variant="h1">Free to play games list</Typography>
            <GamesList/>
        </div>
    );
};

export default MainPage;