import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IconButton, Menu, MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {gamesByPlatformAsync} from "../redux/Slice";
import GamesList from "../components/GamesList";

const GamesByPlatform = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [platform, setPlatform] = useState('Select platform');

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handlePlatformMenu = (e) =>{
    //     setPlatform(e.target.value)
    // }

    const handleClick = (e) =>{
        const {myValue} = e.currentTarget.dataset;
        setPlatform(myValue);
    }

    const ftpGames = useSelector((state) => state.ftpGamesState)

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(gamesByPlatformAsync({platform}))
    }, [])

    return (
        <div>
            <IconButton onClick={handleMenu}>{platform}<KeyboardArrowDownIcon/></IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem data-my-value="PC" onClick={handleClick}>PC</MenuItem>
                <MenuItem data-my-value="Browser" onClick={handleClick}>Browser</MenuItem>
                <MenuItem data-my-value="All" onClick={handleClick}>All</MenuItem>
            </Menu>
            <GamesList/>
        </div>
    );
};

export default GamesByPlatform;