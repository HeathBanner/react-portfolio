import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

import { EditorContext } from '../../../../context/EditorContext';
import { AppContext } from '../../../../context/AuthContext';

const useStyles = makeStyles((theme) => ({
    containers: {
        [theme.breakpoints.down('md')]: {
            paddingRight: '30%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 10,
        },
        position: 'relative',
        marginTop: 40,
        paddingRight: '20%',
    },
    imgs: {
        [theme.breakpoints.down('md')]: {
            width: '30%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '60%',
            width: '25%',
            right: 10,
        },
        position: 'absolute',
        top: 0,
        right: 0,
        width: '20%',
        height: '100%',
    },
    title: {
        display: 'box',
        boxOrient: 'vertical',
        lineClamp: 2,
        overflow: 'hidden',
    },
    desc: {
        display: 'box',
        boxOrient: 'vertical',
        lineClamp: 2,
        overflow: 'hidden',
        marginTop: 15,
        marginBottom: 15,
    },
}));

const Latest = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);
    const media = useContext(AppContext);

    if (!holder.articleList) { return '' }
    return (
        <Fragment>

            <Typography style={{ marginTop: media.sm ? 40 : 80 }} variant="h5">
                Latest
            </Typography>

            <Divider />

            {
                holder.articleList.map((article, index) => {
                    if (index === 0) { return '' }
                    return (
                        <div className={classes.containers} key={article.title.text}>

                            <Link className={classes.imgs} to={`/blog/${article.title.text}`}>
                                <div
                                    style={{
                                        backgroundImage: `url(${article.jumbotron.src})`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%'
                                    }}    
                                ></div>
                            </Link>
                
                            <Typography className={classes.title} variant={media.md ? 'h5' : 'h4'}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                    {article.title.text}
                                </Link>
                            </Typography>
                
                            <Typography
                                className={classes.desc}
                                variant={media.md ? 'body1' : 'h6'}
                                color="textSecondary"
                            >
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                    {article.description.text}
                                </Link>
                            </Typography>
                                    
                            <Typography style={{ width: '100%' }} variant={media.md ? 'subtitle2' : 'body1'}>
                                Heath Banner
                            </Typography>
                
                            <Typography style={{ width: '100%' }} variant={media.md ? 'subtitle2' : 'body1'} color="textSecondary">
                                {`${article.date.parsedDate}`} &#8226; {`${article.readLength.text} min read`}
                            </Typography>
                                
                        </div>
                    );
                })
            }

        </Fragment>
    );
};

export default Latest;
