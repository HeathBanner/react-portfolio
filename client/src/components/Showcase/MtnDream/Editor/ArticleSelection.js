import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button,
    Divider,
    Typography,
    Paper,
    Avatar,
} from '@material-ui/core';

import { EditorContext } from '../../../../context/EditorContext';
import { AppContext } from '../../../../context/AuthContext';

import Heath from '../../../../pages/Blog/imgs/Heath.jpeg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexWrap: 'wrap',
    },
    button: {
        width: '100%',
        padding: 15,
        color: 'white',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        transition: 'background-color 0.4s ease',
        '&:hover': {
            backgroundColor: 'rgb(0 , 0, 0, 1)',
        },
    },
    paper: {
        width: '70%',
        marginTop: 40,
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        cursor: 'pointer',
        transition: 'background-color 0.4s ease',
        '&:hover': {
            backgroundColor: '#e6e6e6',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 15,
            width: '90%',
        },
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
    title: {
        width: '100%',
        marginBottom: 10,
        display: 'box',
        boxOrient: 'vertical',
        lineClamp: 2,
        overflow: 'hidden',
    },
    desc: {
        width: '100%',
        display: 'box',
        boxOrient: 'vertical',
        lineClamp: 2,
        overflow: 'hidden',
    },
    avatar: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: 0,
        left: 0,
    },
}));

const ArticleSelection = () => {

    const edit = useContext(EditorContext);
    const media = useContext(AppContext);
    const classes = useStyles();
    
    return (
        <Grid container>

            <Grid className={classes.container} item xs={12}>

                <Link 
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '80%',
                        marginTop: 30,
                    }}
                    to={`/editor/new`}
                >
                    <Button className={classes.button}>
                        <Typography>
                            Make New Article
                        </Typography>
                    </Button>
                </Link>

            </Grid>
            
            <Divider style={{ width: '100%', marginTop: 40 }} />

            <Grid className={classes.container} item xs={12}>

                {/* Once the context has updated with the article list, it will
                then loop through and render each article */}
                {
                    edit.articleList
                        ?
                    edit.articleList.map((article) => {
                        return (
                            <Paper
                                className={classes.paper}
                                key={article.title.text}
                            >

                                <Typography
                                    style={{ width: '100%', marginBottom: 20 }}
                                    align="center"
                                    variant={media.xs ? 'h5' : 'h2'}
                                >
                                    <Link
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        to={`/editor/${article.title.text}`}
                                    >
                                        {article.title.text}
                                    </Link>
                                </Typography>

                                <Typography
                                    style={{ width: '100%'}}
                                    align="center"
                                    color="textSecondary"
                                    variant={media.xs ? 'h6' : 'h5'}
                                >
                                    <Link
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        to={`/editor/${article.title.text}`}
                                    >
                                        {article.description.text}
                                    </Link>
                                </Typography>

                                <div className={classes.infoContainer} style={{ width: 'auto' }}>

                                    <Avatar
                                        className={classes.avatar}
                                        src={Heath}
                                        alt="Heath Banner Profile Photo"
                                    />

                                    <div style={{ width: '100%' }}>
                                        <Typography>
                                            Heath Banner
                                        </Typography>
                                    </div>

                                    <Typography color="textSecondary">
                                        {`${article.date.parsedDate} `} &#8226; {` ${article.readLength.text} min read`}
                                    </Typography>

                                </div>

                                <Link
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    to={`/editor/${article.title.text}`}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                                width: '50%',
                                            }}
                                            src={article.jumbotron.src}
                                            alt={article.title.text}
                                        />
                                    </div>
                                </Link>
                                
                            </Paper>
                        )
                    })
                        :
                    
                    ''
                }

            </Grid>

        </Grid>
    );
};

export default ArticleSelection;
