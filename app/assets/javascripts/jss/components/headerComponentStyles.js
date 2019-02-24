const headerComponentStyles = theme => ({
  appBar: {
    position: 'relative',
    margin: '0 auto',
    top: 0,
    padding: '0%',
    display: 'flex',
    backgroundColor: theme.palette.primary.lightblue,
  },
  theFont: {
    fontFamily: theme.Typography.fontFamily[0],
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  text: {
    color: 'white',
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  menuOptions: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 0,
      paddingRight: theme.spacing.unit * 0,
    }
  },
  mainTitleStyles:{
    fontFamily: theme.Typography.fontFamily[0],
    paddingRight: theme.spacing.unit * 3,
    color: '#FFFFFF',
    fontcolor: '#FFFFFF',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  }
});

export default headerComponentStyles;
