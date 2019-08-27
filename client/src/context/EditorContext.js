import React, { useState, createContext, useEffect } from 'react';

export const EditorContext = createContext();

const intialPreview = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
    color: 'black',
    highlight: false,
    font: 'Roboto',
    justify: 'left',
    textStyle: 'body1',
    marginTop: 40,
    marginBottom: 0,
    isText: true,
    isImage: false,
};

const initialInfo = {
    text: '',
    font: 'Roboto',
    justify: 'center',
    color: '',
};

const initialImg = {
    isImage: true,
    src: '',
    alt: '',
    height: '',
    width: '',
    justify: 'center',
    marginTop: 40,
    marginBottom: 0,
};

export const EditorProvider = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [articleList, setArticleList] = useState('');

    const [sectionMode, setSectionMode] = useState({ el: 'title' });
    const [title, setTitle] = useState({ ...intialPreview, isPublished: false });
    const [description, setDescription] = useState({ ...initialInfo, textStyle: 'h5' });
    const [readLength, setReadLength] = useState({ ...initialInfo });
    const [jumbotron, setJumbotron] = useState({ ...initialImg });
    const [body, setBody] = useState([ { ...intialPreview } ]);
    
    useEffect(() => {
        fetch('/api/blog/getList')
            .then(res => res.json())
            .then((result) => { setArticleList([ ...result ]) })
            .catch((error) => { console.log(error); });
    }, []);

    const handleMode = () => {
        setEditMode(!editMode);
    };

    const editArticle = (title) => {
        if (title === 'new') { return }
        fetch('/api/blog/getArticle', {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                setTitle(result.title);
                setDescription(result.description);
                setReadLength(result.readLength);
                setJumbotron(result.jumbotron);
                setBody(result.body);
            })
            .catch((error) => { console.log(error); });
    };

    const handleSectionMode = (newSection) => {
        switch (newSection.el) {
            case 'title':
                setSectionMode(newSection);
                break;
            case 'description':
                setSectionMode(newSection);
                break;
            case 'readLength':
                setSectionMode({ ...newSection });
                break;
            case 'jumbotron':
                setSectionMode(newSection);
                break;
            case 'body':
                setSectionMode(newSection);
                break;
            case 'image':
                setSectionMode(newSection);
                break;
            default:
                return;
        }
    };

    const setPublished = () => {
        setTitle({ ...title, isPublished: true });
    };

    const handleBody = ( input, index ) => {
        let newBody = body;
        newBody[index].text = input;
        setBody([ ...newBody ]);
    };

    const newBody = () => {
        let newBody = body;
        newBody.push({ ...intialPreview });
        setBody([ ...newBody ]);
    };

    const handleImage = (input, index) => {
        let newBody = body;
        newBody[index].src = input;
        setBody([ ...newBody ]);
    };

    const newImgEl = () => {
        const newBody = body;
        newBody.push({ ...initialImg });
        setBody([ ...newBody ]);
    };

    const handleInput = ( e, section ) => {
        let input = e.target.value;
        switch (section.El) {
            case 'title':
                setTitle({ ...title, text: input });
                break;
            case 'description':
                setDescription({ ...description, text: input });
                break;
            case 'readLength':
                setReadLength({ ...readLength, text: input });
                break;
            case 'jumbotron':
                setJumbotron({ ...jumbotron, src: input });
                break;
            case 'body':
                handleBody(input, section.index);
                break;
            case 'image':
                handleImage(input, section.index);
                break;
            default:
                return
        }
    };

    const handleFont = ( newFont ) => {
        switch (sectionMode.el) {
            case 'title':
                setTitle({ ...title, font: newFont });
                break;
            case 'description':
                setDescription({ ...description, font: newFont });
                break;
            case 'readLength':
                setReadLength({ ...readLength, font: newFont });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].font = newFont;
                setBody([ ...newBody ]);
                break;
            default:
                break;
        }
    };

    const handleStyling = (style) => {
        switch (sectionMode.el) {
            case 'title':
                setTitle({ ...title, [style]: !title[style] });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index][style] = !newBody[sectionMode.index][style];    
                setBody([ ...newBody ]);   
                break;
            default:
                break;
        }
    };

    const handleInfoJustify = (justification) => {
        if (sectionMode.el === 'description') {
            switch (justification) {
                case 'left':
                    setDescription({ ...description, justify: 'left' });
                    break;
                case 'center':
                    setDescription({ ...description, justify: 'center' });
                    break;
                case 'right':
                    setDescription({ ...description, justify: 'right' });
                    break;
                default:
                    setDescription({ ...description, justify: 'justify' });
                    break;
    
            }
        } else {
            switch (justification) {
                case 'left':
                    setReadLength({ ...readLength, justify: 'flex-start' });
                    break;
                case 'center':
                    setReadLength({ ...readLength, justify: 'center' });
                    break;
                case 'right':
                    setReadLength({ ...readLength, justify: 'flex-end' });
                    break;
                default:
                    return;
            }
        }
    };

    const handleJumboJustify = (justification) => {
        switch (justification) {
            case 'left':
                setJumbotron({ ...jumbotron, justify: 'flex-start' });
                break;
            case 'center':
                setJumbotron({ ...jumbotron, justify: 'center' });
                break;
            default:
                setJumbotron({ ...jumbotron, justify: 'flex-end' });
                break;
        }
    };

    const handleImageJustify = (justification) => {
        let newBody = body;
        switch (justification) {
            case 'left':
                newBody[sectionMode.index].justify = 'flex-start';
                setBody([ ...newBody ]);
                break;
            case 'center' || 'justify':
                newBody[sectionMode.index].justify = 'center';
                setBody([ ...newBody ]);
                break;
            default:
                newBody[sectionMode.index].justify = 'flex-end';
                setBody([ ...newBody ]);
                break;
        }
    };

    const handleJustify = (justification) => {
        switch (sectionMode.el) {
            case 'title':
                setTitle({ ...title, justify: justification });
                break;
            case 'description':
                handleInfoJustify(justification);
                break;
            case 'readLength':
                handleInfoJustify(justification);
                break;
            case 'jumbotron':
                handleJumboJustify(justification);
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].justify = justification;    
                setBody([ ...newBody ]);
                break;
            case 'image':
                handleImageJustify(justification);
                break;
            default:
                break;
        }
    };

    const handleTextStyle = (style) => {
        switch (sectionMode.el) {
            case 'title':
                setTitle({ ...title, textStyle: style });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].textStyle = style;    
                setBody([ ...newBody ]);
                break;
            default:
                break;
        }
    };

    const handleTextColor = (color) => {
        switch (sectionMode.el) {
            case 'title':
                setTitle({ ...title, color: color });
                break;
            case 'description':
                setDescription({ ...description, color: color });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].color = color;
                setBody([ ...newBody ]);
                break;
            default:
                break;
        }
    };

    const handleMarginTop = (e) => {
        if (sectionMode.el === 'title') {
            return setTitle({ ...title, marginTop: e.target.value });
        } else if ( (sectionMode.el === 'body') || (sectionMode.el === 'image') ) {
            let newBody = body;
            newBody[sectionMode.index].marginTop = e.target.value;
            return setBody([ ...newBody ]);
        }
    };

    const handleMarginBottom = (e) => {
        if (sectionMode.el === 'title') {
            return setTitle({ ...title, marginBottom: e.target.value });
        } else if ( (sectionMode.el === 'body') || (sectionMode.el === 'image') ) {
            let newBody = body;
            newBody[sectionMode.index].marginBottom = e.target.value;
            return setBody([ ...newBody ]);
        }
    };

    return (
        <EditorContext.Provider
            value={{
                handleInput,
                handleStyling,
                handleFont,
                handleJustify,
                handleTextStyle,
                handleTextColor,
                handleMarginTop,
                handleMarginBottom,
                handleMode,
                handleSectionMode,
                sectionMode,
                setPublished,
                articleList,
                editMode,
                editArticle,
                newBody,
                newImgEl,
                title,
                description,
                readLength,
                jumbotron,
                body,
            }}
        >

            {props.children}

        </EditorContext.Provider>
    );
};
