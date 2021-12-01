import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    card:{
        height: "25vw"
    }
})

const GamesList = () => {

    const classes = useStyles();

    const ftpGames = useSelector((state) => state.ftpGamesState)



    return (
        <Grid container>
            {ftpGames.map((listFromApi, key) =>{
                return <Grid item
                             lg={4}
                             md={4}
                             sm={6}
                             xs={12}
                             key={listFromApi.id}>
                    <Card variant="outlined" style={{background: "rgba(132,130,0,0.26)"}} className={classes.card} sx={{m:1}}>
                        <CardHeader title={listFromApi.title} subheader={listFromApi.genre}>
                            <Typography variant="h3">{listFromApi.platform}</Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="h5">{listFromApi.short_description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </Grid>
    );
};

export default GamesList;