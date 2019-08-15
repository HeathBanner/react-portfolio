import React, { useEffect, useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { emphasize, makeStyles } from '@material-ui/core/styles';
import { Typography, NoSsr, TextField, Paper, MenuItem, Button, Icon } from '@material-ui/core';

import PropTypes from 'prop-types';
import Select from 'react-select';


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      margin: '50px auto',  
    },
    [theme.breakpoints.down('lg')]: {
      width: '70%',
      margin: '50px auto',  
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: '20px auto 10px auto',  
    },
    [theme.breakpoints.down('xs')]: {
        width: '90%',
        margin: '20px auto 10px auto',
        padding: 15,
    },
    padding: 30,
    background: 'rgb(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    
  },
  form: {
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    width: '70%'
  },
  input: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    display: 'flex',
    height: 'auto',
    width: '100%',
    color: 'white !important',
    fontSize: '2rem',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  valueContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: '10px 5px 10px 0px',
    },
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    padding: '15px 10px 15px 0px',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottom: '1px solid white',
    color: 'white !important',
    '&:hover': {
      cursor: 'text',
    }
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
    color: 'white',
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[900],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    fontSize: '2rem',
    color: 'white !important'
  },
  placeholder: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: '2rem',
    margin: '0px 0px 10px 0px',
    color: 'white'
  },
  menuItem: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    fontSize: '2rem',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      marginTop: 10,
    },
    background: 'rgba(0, 0, 0, 0.08)',
    color: 'white',
    marginTop: 20,
    padding: 15,
    '&:hover': {
      background: 'rgb(68, 192, 255, 0.7)',
    },
  },
  hover: {
    background: 'rgb(232, 240, 255, 0.8)',
  },
  underline: {
    '&:before': {
        borderBottom: '1px solid #fcdb0d !important',
    },
    '&:after': {
        borderBottom: '2px solid #00d0ff !important',
    },
    '&:hover:before': {
        borderBottom: '2px solid #fcdb0d !important',
    },
  },
  label: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
    '&.Mui-focused': {
      color: '#ffbb19'
    },
    fontSize: '2rem',
    color: 'rgb(255, 255, 255, 0.6)'
  },
  icon: {
    '&:hover': {
      color: '#00d0ff'  
    },
    color: '#fcdb0d'
  }
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      style={{
        color: 'white',
        marginBottom: 20,
      }}
      onChange= {props.selectProps.onChange}
      InputProps={{
        inputComponent,
        className: classes.underline,
        inputProps: {
          onChange: props.selectProps.onChange,
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      className={props.selectProps.classes.menuItem}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function DropdownIndicator(props) {
  
  const {
    selectProps: { classes },
  } = props;

  return (
    <Icon fontSize="large" className={classes.icon}>keyboard_arrow_down</Icon>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};


function ValueContainer(props) {


  return <div className={props.selectProps.classes.valueContainer} >{props.children}</div>;
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};


function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator,
};

const states = [
  {label: 'Alabama'},
  {label: 'Alaska'},
  {label: 'Arizona'},
  {label: 'Arkansas'},
  {label: 'California'},
  {label: 'Colorado'},
  {label: 'Connecticut'},
  {label: 'Delaware'},
  {label: 'Florida'},
  {label: 'Georgia'},
  {label: 'Hawaii'},
  {label: 'Idaho'},
  {label: 'Illinois'},
  {label: 'Indiana'},
  {label: 'Iowa'},
  {label: 'Kansas'},
  {label: 'Louisiana'},
  {label: 'Maine'},
  {label: 'Maryland'},
  {label: 'Massachusetts'},
  {label: 'Michigan'},
  {label: 'Minnesota'},
  {label: 'Mississippi'},
  {label: 'Missouri'},
  {label: 'Montana'},
  {label: 'Nebraska'},
  {label: 'Nevada'},
  {label: 'New Hampshire'},
  {label: 'New Jersey'},
  {label: 'New Mexico'},
  {label: 'New York'},
  {label: 'North Carolina'},
  {label: 'North Dakota'},
  {label: 'Ohio'},
  {label: 'Oklahoma'},
  {label: 'Oregon'},
  {label: 'Pennsylvania'},
  {label: 'Rhode Island'},
  {label: 'South Carolina'},
  {label: 'South Dakota'},
  {label: 'Tennesee'},
  {label: 'Texas'},
  {label: 'Utah'},
  {label: 'Vermont'},
  {label: 'Virginia'},
  {label: 'Washington'},
  {label: 'West Virginia'},
  {label: 'Wisconsin'},
  {label: 'Wyoming'}
];

export default function IntegrationReactSelect(props) {

  const classes = useStyles();
  const holder = useContext(AppContext);

  const [selectedState, setSelectedState] = React.useState('');

  const [queriedCities, setQueriedCities] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState(null);

  useEffect(() => {
      fetch('/api/cities/onLoad')
        .then(res => res.json())
        .then((result) => {
          setQueriedCities(result);
        });
  }, []);

  function handleCityInputChange(value) {
    if (value.nativeEvent) {
      const query = value.target.value;
      fetch('/api/cities/search', {
        method: 'POST',
        body: JSON.stringify({ city: query, state: selectedState }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then((result) => {
          setQueriedCities(result);
        });
    } else { setSelectedCity(value); }
  }

  function handleStateInputChange(value) {
    if (value.nativeEvent) { return } 
    setSelectedState(value);
    fetch('/api/cities/search', {
      method: 'POST',
      body: JSON.stringify({ city: 'a', state: value }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((result) => {
        setQueriedCities(result);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/cities/submit', {
      method: 'POST',
      body: JSON.stringify({ city: selectedCity, state: selectedState }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((result) => { props.updateModule(result); });
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: 'white',
      '& input': {
        font: 'inherit',
      },
      '& indicatorContainer': {
        color: 'white'
      },
    }),
  };

  return (
    <div className={classes.root}>

      <form className={classes.form} onSubmit={handleSubmit}>

        <NoSsr>

          <Select
            classes={classes}
            styles={selectStyles}
            inputId="react-select-country"
            TextFieldProps={{
              label: 'State',
              InputLabelProps: {
                htmlFor: 'react-select-country',
                shrink: true,
                className: classes.label
              },
              placeholder: 'Search for a city',
            }}
            options={states.map(suggestion => ({
              value: suggestion.label,
              label: suggestion.label,
            }))}
            className={{ classes: { icon: classes.icon } }}
            components={components}
            value={selectedState}
            onChange={handleStateInputChange}
          />

          <div className={classes.divider} />

          <Select
            classes={classes}
            styles={selectStyles}
            inputId="react-select-city"
            TextFieldProps={{
              label: 'City',
              InputLabelProps: {
                htmlFor: 'react-select-city',
                shrink: true,
                className: classes.label
              },
              placeholder: 'Search for a city',
            }}
            options={queriedCities ? queriedCities.map(suggestion => ({
              value: suggestion.name,
              label: suggestion.name,
            })) : ''}
            value={selectedCity}
            onChange={handleCityInputChange}
            components={components}
          />

        </NoSsr>

        <Button 
          fullWidth
          classes={{ root: classes.button }} 
          type="submit"
        >
          <Typography variant={holder.xs ? 'body1' : 'h6'} align="center">
            Submit
          </Typography>
        </Button>

      </form>

    </div>
  );
};