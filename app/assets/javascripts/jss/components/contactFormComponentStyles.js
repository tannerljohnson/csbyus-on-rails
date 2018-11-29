const contactFormComponentStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldContainer: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
  },
  mainTitle: {
    paddingRight: `${theme.spacing.unit * 10}px`,
    paddingLeft: `${theme.spacing.unit * 10}px`,
    paddingTop: '5%', // 16:9
    paddingBottom: '5%', // 16:9
    backgroundColor: theme.palette.secondary.light,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

export default contactFormComponentStyles;
