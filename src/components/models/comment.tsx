import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ReviewResults } from '../../interfaces/details.interface';
import { Avatar, Divider, Grid } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es' 

const AVATAR_URL = process.env.REACT_APP_AVATAR_BASE_URL
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Comment:FC<{comment:ReviewResults}> = ({ comment }) =>{
  moment.locale('es')
  const classes = useStyles();
  const commentOwner = comment.author_details.name || 'Anónimo'
  const avatar:string = `${AVATAR_URL}${comment.author_details.avatar_path}`
  // return (
  //   <TableContainer component={Paper}>
  //     <Table className={classes.table} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Author</TableCell>
  //           <TableCell align="right">Rating</TableCell>
  //           <TableCell align="right">Content</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         <TableRow>
  //           <TableCell component="th" scope="row">
  //             {comment.author_details.name}
  //           </TableCell>
  //           <TableCell align="right"><Rating rating={comment?.author_details.rating} /></TableCell>
  //           <TableCell align="right">{comment.content}</TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
  return ( 
     <Paper style={{ padding: "8px 26px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt={commentOwner} src={avatar} />
          </Grid>
          <Grid justifyContent='flex-start' item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{commentOwner}</h4>
            <p style={{ textAlign: "left" }}>
              {comment.content}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              hace { moment.duration(moment().diff(comment.updated_at)).humanize()}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
  )
}

export default Comment;
