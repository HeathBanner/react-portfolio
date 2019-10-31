import React, {
    useState,
    useContext,
    Fragment,
} from 'react';

import { EditorContext } from '../../../../../context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Popover,
    Avatar,
    Button,
    Icon,
} from '@material-ui/core';

const colorPalette = [
    {
        name: 'Black',
        code: '#000000',
    },
    {
        name: 'Gunmetal',
        code: '#2C3539',
    },
    {
        name: 'Charcoal',
        code: '#34282C',
    },
    {
        name: 'Dark Slate Grey',
        code: '#25383C',
    },
    {
        name: 'Iridium',
        code: '#3D3C3A',
    },
    {
        name: 'Smokey Gray',
        code: '#6D6968',
    },
    {
        name: 'Battleship Gray',
        code: '#848482',
    },
    {
        name: 'Gray Cloud',
        code: '#B6B6B4',
    },
    {
        name: 'Metallic Silver',
        code: '#BCC6CC',
    },
    {
        name: 'Blue Gray',
        code: '#98AFC7',
    },
    {
        name: 'Steel Blue',
        code: '#4863A0',
    },
    {
        name: 'Dark Slate Blue',
        code: '#2B3856',
    },
    {
        name: 'Navy Blue',
        code: '#000080',
    },
    {
        name: 'Blue Orchid',
        code: '#1F45FC',
    },
    {
        name: 'Blue Koi',
        code: '#659EC7',
    },
    {
        name: 'Deep Sky Blue',
        code: '#3BB9FF',
    },
    {
        name: 'Light Sea Green',
        code: '#3EA99F',
    },
    {
        name: 'Medium Aquamarine',
        code: '#348781',
    },
    {
        name: 'Teal',
        code: '#008080',
    },
    {
        name: 'Hazel Green',
        code: '#617C58',
    },
    {
        name: 'Venom Green',
        code: '#728C00',
    },
    {
        name: 'Dark Forest Green',
        code: '#254117',
    },
    {
        name: 'Medium Forest Green',
        code: '#347235',
    },
    {
        name: 'Pine Green',
        code: '#387C44',
    },
    {
        name: 'Green Apple',
        code: '#4CC417',
    },
    {
        name: 'Avocado Green',
        code: '#B2C248',
    },
    {
        name: 'Cantaloupe',
        code: '#FFA62F',
    },
    {
        name: 'Sandy Brown',
        code: '#EE9A4D',
    },
    {
        name: 'Copper',
        code: '#B87333',
    },
    {
        name: 'Wood',
        code: '#966F33',
    },
    {
        name: 'Oak Brown',
        code: '#806517',
    },
    {
        name: 'Army Brown',
        code: '#827B60',
    },
    {
        name: 'Mocha',
        code: '#493D26',
    },
    {
        name: 'Coffee',
        code: '#6F4E37',
    },
    {
        name: 'Light Coral',
        code: '#E77471',
    },
    {
        name: 'Scarlet',
        code: '#FF2400',
    },
    {
        name: 'Grapefruit',
        code: '#DC381F',
    },
    {
        name: 'Red Wine',
        code: '#990012',
    },
    {
        name: 'Firebrick',
        code: '#800517',
    },
    {
        name: 'Maroon',
        code: '#810541',
    },
];

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  colorsContainer: {
    width: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatars: {
    height: 30,
    width: 30,
    margin: 5,
    flexGrow: 1,
    cursor: 'pointer',
  },
}));

const ColorPicker = () => {

  const classes = useStyles();
  const holder = useContext(EditorContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const wrapper = (color) => {
    holder.handleTextColor(color);
    handleClose();
  };

  const colorSwitch = () => {
    switch (holder.sectionMode.el) {
        case 'body':
            return holder[holder.sectionMode.el][holder.sectionMode.index].color;
        case 'jumbotron':
            return 'N/A';
        case 'image':
            return 'N/A';
        case 'readLength':
            return 'N/A';
        default:
            return holder[holder.sectionMode.el].color;
    }
};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>

      <Button style={{ marginRight: 10 }} aria-describedby={id} variant="contained" onClick={handleClick}>

        <Icon style={{ color: colorSwitch() }}>
            format_color_text
        </Icon>

      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div className={classes.colorsContainer}>
              
            {
                colorPalette.map((color) => {
                    return (
                        <Avatar
                            onClick={() => wrapper(color.code)}
                            style={{ backgroundColor: color.code }}
                            className={classes.avatars}
                            key={color.name}
                        />
                    );
                })
            }
 
          </div>

      </Popover>

    </Fragment>
  );
};

export default ColorPicker;
