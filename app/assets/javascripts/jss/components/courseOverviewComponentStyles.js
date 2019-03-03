//TODO: replace state with props when the server is ready
const courseOverviewComponentStyles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },

  layout2: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingTop: '5%',
   [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

});

export default courseOverviewComponentStyles;