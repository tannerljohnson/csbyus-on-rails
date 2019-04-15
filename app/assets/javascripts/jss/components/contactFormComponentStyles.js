const contactFormComponentStyles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: theme.Typography.fontFamily[0],
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    backgroundColor: theme.palette.primary.lightblue,
    fontFamily: theme.Typography.fontFamily[0],
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      width: 350,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  },
  textFieldContainer: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
    paddingTop: '5%', // 16:9
    paddingRight: `${theme.spacing.unit * 22}px`,
    paddingLeft: `${theme.spacing.unit * 22}px`,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '0%',
      paddingLeft: `${theme.spacing.unit * 10}px`,
      paddingRight: `${theme.spacing.unit * 10}px`,
    },
  },
  mainTitle: {
    paddingRight: `${theme.spacing.unit * 10}px`,
    paddingLeft: `${theme.spacing.unit * 10}px`,
    paddingTop: '5%', // 16:9
    paddingBottom: '5%', // 16:9
    backgroundColor: theme.palette.secondary.main, // change color here
    // color: theme.palette.common.white,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  textContentStyle: {
    fontFamily: theme.Typography.fontFamily[0],
  },
});

export default contactFormComponentStyles;
