import { Grid, Paper, Typography } from "@material-ui/core";
import {  LinearProgress } from "@mui/material";
import { FC, useState } from "react";
import { UIStyles } from "../../theme/globalStyles";
import { ReviewResults } from "../../interfaces/details.interface";
import Comment from "./comment";
import { Skeleton } from "@material-ui/lab";
import { Rating } from "../ui/rating";

export const CommentViewer: FC<{comments:ReviewResults[], loading:boolean}> = ({comments, loading}) => {
    const { commentViewerContainer } = UIStyles();

    if ( loading ){
        return  <Paper style={{padding: '2rem'}} elevation={20} className={commentViewerContainer} >
                <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Skeleton variant="circle"/>
                </Grid>
                <Grid justifyContent='flex-start' item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>
                        <Skeleton width={300}/>    
                    </h4>
                    <Rating rating={0} />
                    <p style={{ textAlign: "left" }}>
                        <Skeleton width={900}/>    
                        <Skeleton width={900}/>    
                        <Skeleton width={900}/>    
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                    --- 
                    </p>
                </Grid>
                </Grid>
        </Paper>
    }

    if (comments.length === 0 ){
        return <Paper style={{padding: '10%'}} elevation={20} className={commentViewerContainer} >
             <Typography> There are no reviews yet. Be the first one!</Typography>
        </Paper>
    }

    return (
        <Paper elevation={20} className={commentViewerContainer} >
           {comments.map((comment, index)=>{
            return <Comment comment={comment} key={`comment-container-${index}`} />
           })}
        </Paper>)
}   