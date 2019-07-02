import React, { useEffect } from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { ThemeProvider } from '@material-ui/styles';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import jssPluginPropsSort from 'jss-plugin-props-sort';


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      height: 250,
      width: '70%',
      margin: '50px auto',  
    },
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: '70%',
      margin: '50px auto',  
    },
    [theme.breakpoints.down('sm')]: {
      height: 250,
      width: '90%',
      margin: '20px auto 10px auto',  
    },
    [theme.breakpoints.down('xs')]: {
        height: 250,
        width: '90%',
        margin: '20px auto 10px auto',
    },
    flexGrow: 1,
    background: 'rgb(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    
  },
  form: {
    width: '70%'
  },
  label: {
    color: 'white',
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
    width: '100%',
    fontColor: 'white !important',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
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
    fontSize: 16,
    color: 'white !important'
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
    color: 'white'
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
    background: 'rgba(0, 0, 0, 0.08)',
    color: 'white',
    margin: '20px auto',
    '&:hover': {
      background: 'rgb(68, 192, 255, 0.7)',
    },
  },
  hover: {
    background: 'rgb(232, 240, 255, 0.8)',
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
      }}
      onChange= {props.selectProps.onChange}
      InputProps={{
        inputComponent,
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
};

var suggestions = [];

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
  const theme = useTheme();

  const [queriedState, setQueriedState] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');

  const [queriedCities, setQueriedCities] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState(null);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [sentRequest, setSentRequest] = React.useState(false);

  useEffect(() => {
    if(!sentRequest){
      setSentRequest(true);
      fetch('/api/cities/onLoad')
      .then(res => res.json())
      .then((result) => {setQueriedCities(result); setIsLoaded(true);})
    }
    if(isLoaded) {
      setIsLoaded(false);
      suggestions = queriedCities.map(suggestion => ({
        value: suggestion.name,
        label: suggestion.name,
    }))
    }
  })

  function handleCityInputChange(value) {
    if (value.nativeEvent) {
      const query = value.target.value
      
      fetch('/api/cities/search', {
        method: 'POST',
        body: JSON.stringify({city: query, state: selectedState}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then((result) => {setIsLoaded(true); setQueriedCities(result);})
    
    } else {setSelectedCity(value)}
  }

  function handleStateInputChange(value) {
    if(value.nativeEvent){
      const query = value.target.value
      setQueriedState(query);
      
    } else {
      setSelectedState(value)
      fetch('/api/cities/search', {
        method: 'POST',
        body: JSON.stringify({city: 'a', state: value}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then((result) => {setIsLoaded(true); setQueriedCities(result);})
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
      fetch('/api/cities/submit', {
        method: 'POST',
        body: JSON.stringify({city: selectedCity, state: selectedState}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then((result) => {props.updateModule(result)})
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: 'white',
      '& input': {
        font: 'inherit',
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
            },
            placeholder: 'Search for a city',
          }}
          options={states.map(suggestion => ({
            value: suggestion.label,
            label: suggestion.label,
          }))}
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
              },
              placeholder: 'Search for a city',
            }}
            options={queriedCities ? queriedCities.map(suggestion => ({
              value: suggestion.name,
              label: suggestion.name,
            })) : console.log('not yet')}
            value={selectedCity}
            onChange={handleCityInputChange}
            components={components}
          />
      </NoSsr>
        <Button fullWidth classes={{root: classes.button}} type="submit">Submit</Button>
        </form>
    </div>
  );
}