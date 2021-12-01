import React from 'react';
import {AppBar, Container, Menu, MenuItem, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    toolbar:{
        display:"flex",
        justifyContent:"space-around"
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar} >

                    <Link to="/">Main page</Link>
                    <Link to="/gamesbyplatform">Games by platform</Link>
                    <Link to="/sortgamesbygenre">Sort games by genre</Link>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;