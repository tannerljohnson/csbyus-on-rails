import Background from '../../../images/AboutUs.png';

const aboutComponentStyles = theme => ({
  backgroungImg: {
    backgroundImage: `url(${Background})`,
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
});

export default aboutComponentStyles;
