import React from 'react';

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

export default ({ links, trigger, media}) => {
    
    const classes = useStyles();

    return (
        <>
            {links.map((item) => {
                return (
                    <a
                        href={item.link}
                        className={trigger ? classes.linksTrigger : classes.links}
                        key={item.text}
                    >
                        <Typography
                            variant={media.xs ? 'body1' : 'h6'}
                        >
                            {item.text}
                        </Typography>
                    </a>
                );
            })}
        </>
    );
};