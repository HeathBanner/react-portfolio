import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

import { EditorContext } from '../../../../context/EditorContext';

const useStyles = makeStyles((theme) => ({
    containers: {
        position: 'relative',
        marginTop: 40,
        paddingRight: '20%',
    },
    imgs: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '20%',
        height: '100%',
    },
}));

const Latest = () => {

    const holder = useContext(EditorContext);
    const classes = useStyles();

    if (!holder.articleList) { return '' }
    return (
        <Fragment>

            <Typography style={{ marginTop: 80 }} variant="h5">
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
                
                            <Typography variant="h4">
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                    {article.title.text}
                                </Link>
                            </Typography>
                
                            <Typography style={{ marginTop: 15, marginBottom: 15 }} variant="h6" color="textSecondary">
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                    {article.description.text}
                                </Link>
                            </Typography>
                                    
                            <Typography style={{ width: '100%' }} variant="body1">
                                Heath Banner
                            </Typography>
                
                            <Typography style={{ width: '100%' }} variant="body1" color="textSecondary">
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
