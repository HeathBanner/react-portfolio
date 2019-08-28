import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar } from '@material-ui/core';

import Nav from '../Navigation/Nav';

import Heath from '../../../../pages/Blog/imgs/Heath.jpeg';

const fontSizes = {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.25rem',
};

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 60,
        marginBottom: 80,
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    articlesContainer: {
        paddingLeft: '20%',
        paddingRight: 40,
    },
    infoContainer: {
        position: 'relative',
        height: 60,
        marginTop: 20,
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
    readLength: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
}));

const Article = ({ match }) => {

    const [article, setArticle] = useState('');

    useEffect(() => {
        const title = match.params.title;
        fetch('/api/blog/getArticle', {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                setArticle(result);
            })
            .catch((error) => { console.log(error); });
    }, []);

    const classes = useStyles();

    if (!article) { return '' }
    return (
        <Grid container>
            
            <Grid style={{ height: 60 }} item xs={12}>

                <Nav />

            </Grid>
            <Grid className={classes.container} item xs={12}>

                <Typography
                    style={{
                        fontSize: fontSizes[article.title.textStyle],
                        fontFamily: `${article.title.font}, Helvetica, Arial, sans-serif`,
                        fontWeight: article.title.bold ? 'bold' : 'normal',
                        fontStyle: article.title.italic ? 'italic' : 'normal',
                        textDecoration: article.title.underline ? 'underline' : 'none',
                        textAlign: article.title.justify,
                        color: article.title.color,
                        backgroundColor: article.title.highlight ? '#ffff00' : 'none',
                        marginTop: parseInt(article.title.marginTop),
                        marginBottom: parseInt(article.title.marginBottom),
                        width: '100%',
                    }}
                >
                    {article.title.text}
                </Typography>

                <Typography
                    style={{
                        fontSize: fontSizes[article.description.textStyle],
                        fontFamily: `${article.description.font}, Helvetica, Arial, sans-serif`,
                        textAlign: article.description.justify,
                        width: '100%',
                    }}                
                >
                    {article.description.text}
                </Typography>

                <div
                    className={classes.infoContainer}
                    style={{ width: article.readLength.justify === 'flex-start' ? '100%' : 'auto' }}
                >

                    <Avatar
                        className={classes.avatar}
                        src={Heath}
                        alt="Terri Banner Profile Photo"
                    />

                    <div style={{ width: '100%' }}>
                        <Typography>
                            Terri Banner
                        </Typography>
                    </div>

                    <Typography className={classes.readLength}>
                        {`Aug 21 `} &#8226; {` ${article.readLength.text} min read`}
                    </Typography>

                </div>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: article.jumbotron.justify,
                    }}
                >
                    <img
                        style={{
                            marginTop: article.jumbotron.marginTop,
                            marginBottom: article.jumbotron.marginBottom,
                            width: '50%',
                        }}
                        src={article.jumbotron.src}
                        alt={article.title.text}
                    />
                </div>

                {
                    article.body.map((section, index) => {
                        if (section.isText) {
                            return (
                                <Typography
                                    style={{
                                        width: '100%',
                                        fontSize: fontSizes[section.textStyle],
                                        fontFamily: `${section.font}, Helvetica, Arial, sans-serif`,
                                        fontWeight: section.bold ? 'bold' : 'normal',
                                        fontStyle: section.italic ? 'italic' : 'normal',
                                        textDecoration: section.underline ? 'underline' : 'none',
                                        textAlign: section.justify,
                                        color: section.color,
                                        backgroundColor: section.highlight ? '#ffff00' : 'none',
                                        marginTop: parseInt(section.marginTop),
                                        marginBottom: parseInt(section.marginBottom),    
                                    }}
                                    key={index}
                                >
                                    {section.text}
                                </Typography>
                            );
                        }
                        return (
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: section.justify,
                                }}
                            >
                                <img src={section.src} alt={section.alt} />
                            </div>
                        );
                    })
                }

            </Grid>

        </Grid>
    );
};

export default Article;
