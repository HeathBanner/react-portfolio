import React, {
    useState,
    useContext,
    Fragment,
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Popover,
    Typography,
    Fab,
    Icon,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#0000a2',
        zIndex: 1800,
    },
    popover: {
        zIndex: '1600 !important',
    },
    title: {
        marginBottom: 10
    },
    warning: {
        marginTop: 20,
    },
    body: {
        marginTop: 20,
    },
    fab: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
        },
        marginLeft: 10,
        transition: 'all .4s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
}));

const DescPopover = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => { setAnchorEl(e.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <Fragment>

            <Fab
                className={classes.fab}
                onClick={handleClick}
                size={holder.xs ? 'small' : 'large'}
            >
                <Icon fontSize={holder.xs ? 'small' : 'large'}>
                    keyboard_arrow_down
                </Icon>
            </Fab>

            <Popover
                PaperProps={{ className: classes.description }}
                className={classes.popover}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >

                <Typography
                    className={classes.warning}
                    variant={holder.xs ? 'body1' : 'h6'}
                    align="center"
                    color="secondary"
                >
                    ***Still under development***
                </Typography>
                <Typography
                    className={classes.body}
                    variant={holder.xs ? 'body1' : 'h6'}
                    align="center">
                    The Database uses a similar method that Facebook has. Foreign Keys/References linking every type of information
                    as if it were a spider's web. When one "strand" of the web is touched, it can be heard from another end of the web.
                </Typography>
                <Typography
                    className={classes.body}
                    variant={holder.xs ? 'body1' : 'h6'}
                    align="center">
                    This concept uses MongoDB to store and use the information.
                    Users, Stories and the rest of their information are stored within seperate collections containing references to one another.
                    A private messaging feature will be implemented in the near future. It is very close to being finished.
                </Typography>

            </Popover>

        </Fragment>
    );
};

export default DescPopover;
