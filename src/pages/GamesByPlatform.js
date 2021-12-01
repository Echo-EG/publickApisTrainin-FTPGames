import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {gamesByPlatformAsync} from "../redux/Slice";
import GamesList from "../components/GamesList";

const GamesByPlatform = () => {

    const [anchorEl, setAnchorEl] = useState(false);
    const [platform, setPlatform] = useState('all');

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const handlePlatformClick = (e) =>{
        const {myValue} = e.currentTarget.dataset;
        setPlatform(myValue);

        dispatch(gamesByPlatformAsync({platform: myValue}));

    }

    return (
        <div>
            <Typography variant="h1">Games by platform list</Typography>
            <IconButton onClick={handleMenu}>Select platform<KeyboardArrowDownIcon/></IconButton>
            <Menu keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem data-my-value="pc" onClick={handlePlatformClick}>PC</MenuItem>
                <MenuItem data-my-value="browser" onClick={handlePlatformClick}>Browser</MenuItem>
                <MenuItem data-my-value="all" onClick={handlePlatformClick}>All</MenuItem>
            </Menu>
            <GamesList/>
        </div>
    );
};

export default GamesByPlatform;