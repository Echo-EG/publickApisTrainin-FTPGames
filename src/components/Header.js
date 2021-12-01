import React from 'react';
import {AppBar, Container, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    toolbar:{
        display:"flex",
        justifyContent:"space-around"
    },
    linkStyles:{
        fontFamily:"sans-serif",
        textDecoration: "none",
        color:"black"
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" style={{background: "#757de8"}}>
            {/*<Container maxWidth="lg">*/}
                <Toolbar className={classes.toolbar} >

                    <Link to="/" className={classes.linkStyles} >Main page</Link>
                    <Link to="/gamesbyplatform" className={classes.linkStyles} >Games by platform</Link>
                    <Link to="/sortgamesbygenre" className={classes.linkStyles} >Sort games by genre</Link>

                </Toolbar>
            {/*</Container>*/}
        </AppBar>
    );
};

export default Header;