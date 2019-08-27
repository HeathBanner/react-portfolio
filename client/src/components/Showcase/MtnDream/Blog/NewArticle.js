import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';

import { EditorContext } from '../../../../context/EditorContext';

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

    const holder = useContext(EditorContext);
    const classes = useStyles();

    if (holder.articleList) {
        return (
            <Fragment>
    
                <Link
                    style={{ width: '100%', height: 'auto' }}
                    to={`/blog/${holder.articleList[0].title.text}`}
                >
                    <img
                        style={{ width: '100%', height: 'auto' }}
                        src={holder.articleList[0].jumbotron.src}
                        alt={holder.articleList[0].title.text}
                    />
                </Link>
    
                <Typography style={{ marginTop: 20 }} variant="h2">
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${holder.articleList[0].title.text}`}>
                        {holder.articleList[0].title.text}
                    </Link>
                </Typography>
    
                <Typography style={{ marginTop: 15, marginBottom: 15 }} variant="h6" color="textSecondary">
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${holder.articleList[0].title.text}`}>
                        {holder.articleList[0].description.text}
                    </Link>
                </Typography>
    
                <div className={classes.infoContainer}>

                    <Avatar
                        className={classes.avatar}
                        src={`https://media.licdn.com/dms/image/C5603AQHqTyUqMrqJZA/profile-displayphoto-shrink_100_100/0?e=1572480000&v=beta&t=QNVV8XF1wUl0Pw5sTEVgahCY8A0N1d58dCU7qAXFf20`}
                        alt="Heath Banner Profile Photo"
                    />
        
                    <Typography style={{ width: '100%' }} variant="body1">
                        Heath Banner
                    </Typography>
        
                    <Typography style={{ width: '100%' }} variant="body1" color="textSecondary">
                        {`${holder.articleList[0].date.parsedDate} `} &#8226; {` ${holder.articleList[0].readLength.text} min read`}
                    </Typography>
                    
                </div>
    
            </Fragment>
        );
    } else { return '' }
};

export default NewArticle;
