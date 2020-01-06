import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headers: {
        width: '100%',
    },
    dividers: {
        marginBlockStart: '0.5em',
        width: '70%',
        marginBottom: 20,
    },
    body: {
        marginBottom: 30,  
    },
    links: {
        width: '50%',
        marginBottom: 50,
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        justifyContent: 'center',
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        padding: 10,
        color: 'white',
        width: '80%',
        backgroundColor: '#0000a2',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: '#2424d4',
            transform: 'scale(1.01)',
        },
    },
}));

export default ({ item, index, media, handleClick }) => {

    const classes = useStyles();

    return (
        <Fragment key={`${item.title}${index}`}>

            <Typography
                className={classes.headers}
                variant={media.xs ? 'h6' : 'h5'}
                align="center"
            >
                {item.title}
            </Typography>

            <Divider className={classes.dividers} />

            <Typography
                className={classes.body}
                variant={media.xs ? 'body1' : 'h6'}
                align="center"
                color="textSecondary"
            >
                {item.body}
            </Typography>

            {
                item.click
                    ?
                <div className={classes.links}>
                    <Button
                        className={classes.buttons}
                        onClick={(e) => handleClick(e, item.click)}
                    >
                        <Typography>
                            Website
                        </Typography>
                    </Button>
                </div>
                    :
                <a
                    href={item.website}
                    className={classes.links}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className={classes.buttons}>
                        <Typography>
                            Website
                        </Typography>
                    </Button>
                </a>
            }

            <a
                href={item.repo}
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.buttons}>
                    <Typography>
                        Repository
                    </Typography>
                </Button>
            </a>

        </Fragment>
    );
};
