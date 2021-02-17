import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import './DashboardList.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 750,
      margin: '0 auto',

    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

const DashboardList = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} md={12} >
                <Typography variant="h6" className={classes.title}>
                    {props.jobTitle}
                </Typography>
                <div className={classes.title}>
                    <List>
                        {props.jobList.map(jobL => (
                            <Fragment key={jobL.id}>
                                <ListItem key={jobL.id}>
                                    <ListItemText
                                        primary={jobL.company}
                                    />
                                    <ListItemSecondaryAction>
                                        <Link to={jobL.id} >
                                            <IconButton edge="end" aria-label="delete">
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </Fragment>
                        ))}
                    </List>
                </div>
            </Grid>
        </div>
      );
}

export default DashboardList;