import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";

const GamesList = () => {

    const ftpGames = useSelector((state) => state.ftpGamesState)

    const dispatch = useDispatch();


    return (
        <div>
            {ftpGames.map((listFromApi, key) =>{
                return <Grid item
                             // lg={4}
                             // md={4}
                             // sm={6}
                             // xs={12}
                             key={listFromApi.id}>
                    <Card sx={{m:1}}>
                        <CardHeader title={listFromApi.title} subheader={listFromApi.genre}>
                            <Typography variant="h3">{listFromApi.platform}</Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="h3">{listFromApi.short_description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </div>
    );
};

export default GamesList;