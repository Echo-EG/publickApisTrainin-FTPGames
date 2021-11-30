import React, {useEffect, useState} from 'react';
import {Button, Container, CssBaseline, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {ftpGamesListAsync} from "./redux/Slice";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import GamesByPlatform from "./pages/GamesByPlatform";
import SortGames from "./pages/SortGames";

const App = () => {



    return (
        <CssBaseline>
            <Router>
                <Header/>
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/gamesbyplatform" component={GamesByPlatform} />
                        <Route exact path="/sortgames" component={SortGames} />
                        <Route path="*" component={MainPage} />
                    </Switch>
                </Container>
            </Router>
        </CssBaseline>
    );
};

export default App;