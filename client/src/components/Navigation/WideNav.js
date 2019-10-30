import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    links: {
        marginLeft: 30,
        textDecoration: 'none',
        color: 'rgb(255, 255, 255)',
        transition: 'color 0.3s ease',
        '&:hover': {
            textDecoration: 'none',
            color: 'rgb(255, 255, 255, 0.3)',
        },
    },
    linksTrigger: {
        marginLeft: 30,
        textDecoration: 'none',
        color: 'rgb(0, 0, 162)',
        transition: 'color 0.3s ease',
        '&:hover': {
            textDecoration: 'none',
            color: 'rgb(0, 0, 162, 0.3)',
        },
    },
}));

const WideNav = (props) => {
    
    const classes = useStyles();

    return (
        <Fragment>

            {props.links.map((item) => {
                return (
                    <a
                        href={item.link}
                        className={props.trigger ? classes.linksTrigger : classes.links}
                        key={item.text}
                    >
                        <Typography
                            variant={props.media.xs ? 'body1' : 'h6'}
                        >
                            {item.text}
                        </Typography>
                    </a>
                );
            })}

        </Fragment>
    );
};

export default WideNav;