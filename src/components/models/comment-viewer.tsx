import { Paper } from "@material-ui/core";
import {  LinearProgress } from "@mui/material";
import { FC, useState } from "react";
import { UIStyles } from "../../theme/globalStyles";
import { ReviewResults } from "../../interfaces/details.interface";
import Comment from "./comment";

export const CommentViewer: FC<{comments:ReviewResults[], loading:boolean}> = ({comments, loading}) => {
    const { commentViewerContainer } = UIStyles();

    if ( loading ){
        return <LinearProgress color="secondary" />
    }

    if (comments.length === 0 ){
        return <>No hay comentarios</>
    }

    return (
        <Paper elevation={20} className={commentViewerContainer} >
           {comments.map((comment, index)=>{
            return <Comment comment={comment} key={`comment-container-${index}`} />
           })}
        </Paper>)
}   