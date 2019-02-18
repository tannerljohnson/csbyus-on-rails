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
    marginRight: 20,
  }, 
  text: {
    color: 'white',
  }
  },
  list: {
    width: 256,
    dense: true,
    fontFamily: theme.Typography.fontFamily[0],
  },
  fullList: {
    width: 'auto',
  },
});

export default headerComponentStyles;
