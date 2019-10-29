import React, {
    useContext,
    useEffect,
    Fragment,
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    TextField,
    Button,
    Avatar,
    CircularProgress,
} from '@material-ui/core';

import Jumbotron from './Tools/Jumbotron';
import Image from './Tools/Image';

import { EditorContext } from '../../../../context/EditorContext';

import Heath from '../../../../pages/Blog/imgs/Heath.jpeg';

const fontSizes = {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.25rem',
};
const mobileFontSizes = {
    h1: '2.125rem',
    h2: '2.125em',
    h3: '1.5rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
};
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const Preview = (props) => {

    const holder = useContext(EditorContext);

    // Once the component mounts, it will send the url parameter to the context
    // to have it update with the currently selected article
    useEffect(() => {
        holder.editArticle(props.title);
    }, []);

    // The makeStyles hook was added within the component due to the reliance of
    // the context information
    const useStyles = makeStyles((theme) => ({
        container: {
            marginTop: 120 + parseInt(holder.title.marginTop),
            padding: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        typo: {
            fontSize: props.xs ? mobileFontSizes[holder.title.textStyle] : fontSizes[holder.title.textStyle],
            fontFamily: `${holder.title.font}, Helvetica, Arial, sans-serif`,
            fontWeight: holder.title.bold ? 'bold' : 'normal',
            fontStyle: holder.title.italic ? 'italic' : 'normal',
            textDecoration: holder.title.underline ? 'underline' : 'none',
            textAlign: holder.title.justify,
            color: holder.title.color,
            backgroundColor: holder.title.highlight ? '#ffff00' : 'inherit',
            padding: 0,
            width: '100%',
            lineHeight: 1.17,
        },
        description: {
            fontSize: props.xs ? mobileFontSizes[holder.description.textStyle] : fontSizes[holder.description.textStyle],
            fontFamily: `${holder.description.font}, Helvetica, Arial, sans-serif`,
            color: holder.description.color,
            textAlign: holder.description.justify,
            marginTop: 20,
            padding: 0,
            lineHeight: 1.17,
        },
        jumboContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: holder.jumbotron.justify,
        },
        newSection: {
            flexGrow: 1,
            marginTop: 20,
            padding: 15,
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            transition: 'background-color .4s ease',
            '&:hover': {
                backgroundColor: 'rgb(0, 0, 0, 0.2)',
            },
        },
        inputs: {
            width: '100%',
            padding: 0,
            lineHeight: '1.5rem',
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
    
    const classes = useStyles();

    // This function generate the current date and parses it to be applied to the
    // elements below
    const generateDate = () => {
        let now = new Date();
        return `${months[now.getMonth()]} ${now.getDate()}`;
    };

    if ( (props.title) && (props.title !== 'new') && (!holder.title.text) ) {
        return (
            <Grid className={classes.container} item xs={12}>
                <CircularProgress />
            </Grid>
        );
    }
    return (
        <Fragment>

            <Grid className={classes.container} item xs={12}>

                <TextField
                    style={{
                        width: '100%',
                        marginBottom: parseInt(holder.title.marginBottom),
                    }}
                    inputProps={{ className: classes.typo }}
                    InputProps={{ className: classes.inputs }}
                    value={holder.title.text}
                    onClick={() => holder.handleSectionMode({ el: 'title' })}
                    onChange={(e) => holder.handleInput(e, { El: 'title' })}
                    multiline={true}
                />

                <TextField
                    style={{ width: '100%' }}                
                    inputProps={{ className: classes.description }}
                    InputProps={{ className: classes.inputs }}
                    value={holder.description.text}
                    onClick={() => holder.handleSectionMode({ el: 'description' })}
                    onChange={(e) => holder.handleInput(e, { El: 'description' })}
                    multiline={true}
                />

                <div
                    className={classes.infoContainer}
                    style={{ width: holder.readLength.justify === 'flex-start' ? '100%' : 'auto' }}
                >

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

                    <Typography className={classes.readLength}>
                        {generateDate()} &#8226;
                    </Typography>

                    <TextField
                        style={{ width: 20, padding: 0 }}                
                        inputProps={{
                            className: classes.readLength,
                            style: { textAlign: 'center', padding: 0 },
                        }}
                        InputProps={{ className: classes.inputs }}
                        value={holder.readLength.text}
                        onClick={() => holder.handleSectionMode({ el: 'readLength' })}
                        onChange={(e) => holder.handleInput(e, { El: 'readLength' })}
                    />

                    <Typography className={classes.readLength}>
                        min read
                    </Typography>

                </div>
                
                <div className={classes.jumboContainer}>

                    <Jumbotron />
                
                </div>
                
                {/* Since the body object contains both image and text elements,
                a conditional was required to render both */}
                { 
                    holder.body.map((section, index) => {
                        
                        if (section.isText) {
                            return (
                                <TextField
                                    style={{
                                        width: '100%',
                                        marginTop: parseInt(holder.body[index].marginTop),
                                        marginBottom: parseInt(holder.body[index].marginBottom),
                                    }}
                                    multiline={true}
                                    inputProps={{
                                        style: {
                                            width: '100%',
                                            fontSize: props.xs ? mobileFontSizes[holder.body.textStyle] : fontSizes[holder.body[index].textStyle],
                                            fontFamily: `${holder.body[index].font}, Helvetica, Arial, sans-serif`,
                                            fontWeight: holder.body[index].bold ? 'bold' : 'normal',
                                            fontStyle: holder.body[index].italic ? 'italic' : 'normal',
                                            textDecoration: holder.body[index].underline ? 'underline' : 'none',
                                            textAlign: holder.body[index].justify,
                                            color: holder.body[index].color,
                                            backgroundColor: holder.body[index].highlight ? '#ffff00' : 'inherit',
                                            lineHeight: 1.17,
                                        } 
                                    }}
                                    InputProps={{ className: classes.inputs }}
                                    value={holder.body[index].text}
                                    onClick={() => holder.handleSectionMode({ el: 'body', index: index })}
                                    onChange={(e) => holder.handleInput(e, { El: 'body', index: index })}
                                    key={index}
                                />
                            );
                        }
                        if (section.isImage) {
                            return (
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: section.justify,
                                        marginTop: parseInt(holder.body[index].marginTop),
                                        marginBottom: parseInt(holder.body[index].marginBottom),
                                    }}
                                    key={index}
                                >
                                    <Image
                                        src={section.src}
                                        index={index}
                                    />
                                </div>
                            );
                        }
                    })
                }

                <Button
                    className={classes.newSection}
                    onClick={holder.newBody}
                    style={{ marginRight: props.xs ? 0 : 20 }}
                >
                    <Typography variant={props.xs ? 'body1' : 'h6'}>
                        Add Body Section
                    </Typography>
                </Button>

                <Button
                    className={classes.newSection}
                    onClick={holder.newImgEl}
                >
                    <Typography variant={props.xs ? 'body1' : 'h6'}>
                        Add Photo
                    </Typography>
                </Button>

            </Grid>

        </Fragment>
    );
};

export default Preview;
