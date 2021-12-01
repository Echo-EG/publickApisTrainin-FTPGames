import React, {useState} from 'react';
import {
    Checkbox,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {useDispatch} from "react-redux";
import {filterByTagAsync} from "../redux/Slice";
import GamesList from "../components/GamesList";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    background: {
        background: "#3f51b5"
    }
})




const SortGamesByGenre = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);

    const genreList = [
        {id: 1, genre:"mmo"},
        {id: 2, genre:"mmorpg"},
        {id: 3, genre:"shooter"},
        {id: 4, genre:"strategy"} ,
        {id: 5, genre:"moba"}
    ]


    // const handleChange = (e) =>{
    //     setChecked(!checked)
    //     if(checked !== true){
    //         dispatch(filterByTagAsync({genre: e.target.value}))
    //         console.log("should work")
    //     }
    //     else{
    //         console.log("didnt work")
    //     }
    // }


    const handleChange = (e) =>{
        dispatch(filterByTagAsync({genre: e.target.value}))
    }

    return (


        <div className={classes.background} >
            <Typography variant="h1">Games by genre list</Typography>
            <Grid container>
                {genreList.map((newGenre, key) => {
                    return <Grid item sx={{m: 1}} key={newGenre.id} id={newGenre.id} >
                        {/*<Checkbox onChange={handleChange} value={newGenre.genre} />*/}
                        <Typography >{newGenre.genre}</Typography>
                        <input type="radio" onClick={handleChange} value={newGenre.genre} name="genre"/>
                    </Grid>
                })}
            </Grid>
            <GamesList />
        </div>

        // <List subheader="Genre">
        //     <ListItem>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" onChange={console.log(mmo)}/>
        //                 <ListItemText primary="MMO" value={mmo}/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" />
        //                 <ListItemText primary="MMORPG"/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" />
        //                 <ListItemText primary="Shooter"/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" />
        //                 <ListItemText primary="Strategy"/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" />
        //                 <ListItemText primary="Moba"/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //         <ListItemButton>
        //             <ListItemIcon>
        //                 <Checkbox edge="start" />
        //                 <ListItemText primary="Battle Royale"/>
        //             </ListItemIcon>
        //         </ListItemButton>
        //     </ListItem>
        // </List>
    );
};

export default SortGamesByGenre;