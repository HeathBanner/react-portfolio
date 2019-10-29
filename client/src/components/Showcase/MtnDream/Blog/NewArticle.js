import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';

import { EditorContext } from '../../../../context/EditorContext';
import { AppContext } from '../../../../context/AuthContext';

import Heath from '../../../../pages/Blog/imgs/Heath.jpeg';

const useStyles = makeStyles((theme) => ({
    infoContainer: {
        position: 'relative',
        height: 60,
        width: 'auto',
        paddingLeft: 80,
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexBasis: 'auto',
    },
    avatar: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: 0,
        left: 0,
    },
}));

const NewArticle = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);
    const media = useContext(AppContext);

    if (holder.articleList) {
        return (
            <Fragment>
    
                <Link
                    style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: 80,
                    }}
                    to={`/blog/${holder.articleList[0].title.text}`}
                >
                    <img
                        style={{ width: '100%', height: 'auto' }}
                        src={holder.articleList[0].jumbotron.src}
                        alt={holder.articleList[0].title.text}
                    />
                </Link>
    
                <Typography
                    style={{ marginTop: 20 }}
                    variant={media.md ? 'h4' : 'h2'}
                >
                    <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        to={`/blog/${holder.articleList[0].title.text}`}
                    >
                        {holder.articleList[0].title.text}
                    </Link>
                </Typography>
    
                <Typography
                    style={{ marginTop: 15, marginBottom: 15 }}
                    variant={media.md ? 'body1' : 'h6'}
                    color="textSecondary"
                >
                    <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        to={`/blog/${holder.articleList[0].title.text}`}
                    >
                        {holder.articleList[0].description.text}
                    </Link>
                </Typography>
    
                <div className={classes.infoContainer}>

                    <Avatar
                        className={classes.avatar}
                        src={Heath}
                        alt="Heath Banner Profile Photo"
                    />
        
                    <Typography
                        style={{ width: '100%' }}
                        variant={media.md ? 'body2' : 'body1'}
                    >
                        Heath Banner
                    </Typography>
        
                    <Typography
                        style={{ width: '100%' }}
                        variant={media.md ? 'body2' : 'body1'}
                        color="textSecondary"
                    >
                        {`${holder.articleList[0].date.parsedDate} `} &#8226; {` ${holder.articleList[0].readLength.text} min read`}
                    </Typography>
                    
                </div>
    
            </Fragment>
        );
    } else { return '' }
};

export default NewArticle;
