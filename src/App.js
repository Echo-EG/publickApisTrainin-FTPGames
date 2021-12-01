import React, {useEffect, useState} from 'react';
import {Button, Container, CssBaseline, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {ftpGamesListAsync} from "./redux/Slice";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import GamesByPlatform from "./pages/GamesByPlatform";
import SortGamesByGenre from "./pages/SortGamesByGenre";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    background: {
        background: "#3f51b5"
    }
})

const App = () => {

    const classes = useStyles();


    return (
        <CssBaseline  >
            <div style={{background:"#3f51b5"}}>
                <Router>
                    <Header/>
                    <Container maxWidth="lg">
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/gamesbyplatform" component={GamesByPlatform}/>
                            <Route exact path="/sortgamesbygenre" component={SortGamesByGenre}/>
                            <Route path="*" component={MainPage}/>
                        </Switch>
                    </Container>
                </Router>
            </div>
        </CssBaseline>
    );
};

export default App;