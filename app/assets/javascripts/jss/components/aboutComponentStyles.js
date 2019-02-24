import BackgroundImg from '../../../images/AboutUs.png'

const aboutComponentStyles = theme => ({
  bgimg: {
    backgroundImage: `url(${BackgroundImg})`,
    position: 'relative',
    width: '100%',
    height: 600,
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  mainFeaturedPostContent: {
    paddingTop: `${theme.spacing.unit * 45}px`,
    marginLeft: theme.spacing.unit * 25,
    marginRight: theme.spacing.unit * 25,
    color: 'white',
  },
  title: {
    paddingTop: `${theme.spacing.unit * 45}px`,
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

export default aboutComponentStyles;
