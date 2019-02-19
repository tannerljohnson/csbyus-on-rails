const headerComponentStyles = theme => ({
  appBar: {
    position: 'relative',
    margin: '0 auto',
    top: 0,
    padding: '0%',
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
});

export default headerComponentStyles;
