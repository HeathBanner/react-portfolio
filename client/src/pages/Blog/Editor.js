import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import Nav from '../../components/Showcase/MtnDream/Navigation/Nav';
import LGToolbar from '../../components/Showcase/MtnDream/Editor/LGToolbar';
import MDToolbar from '../../components/Showcase/MtnDream/Editor/MDToolbar';
import Preview from '../../components/Showcase/MtnDream/Editor/Preview';

const Editor = ({ match }) => {

    const media = useContext(AppContext);

    return (
        <Grid container>

            <Grid item xs={12}>

                {
                    media.md
                        ?
                    <MDToolbar xs={media.xs} md={media.md} />
                        :
                    <LGToolbar />
                }
                
                <Preview xs={media.xs} title={match.params.title} />
               
            </Grid>

        </Grid>
    );
};

export default Editor;
