import Background from '../../../images/HomePageBackground.JPG';

const homeComponentStyles = theme => ({
  appBar: {
    position: 'fixed',
    paddingTop: '0%',
  },
  avatar: {
    margin: 10,
    postition: 'relative',
    textAlign: 'center',
  },
  bgimg: {
    backgroundImage: `url(${Background})`,
    position: 'relative',
    width: '100%',
    height: 670,
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  ourImpact: {
    backgroundColor: theme.palette.background.paper,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 5}px`,
    marginLeft: theme.spacing.unit * 25,
    marginRight: theme.spacing.unit * 25,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
  },
  aboutContent: {
    marginLeft: "4%",
    marginRight: "4%",
    paddingBottom: "4%",
  },
  missionContent: {
    marginLeft: "4%",
    marginRight: "4%",
    paddingBottom: "4%",
    padding: theme.spacing.unit * 6,
  },
  video: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  ourImpactTitle: {
    maxWidth: 600,
    margin: '0 auto',
  },
  heroButtons: {
    paddingTop: '0%', // 16:9
    paddingBottom: '0%', // 16:9
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
  layout2: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: '5%',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  titleHeader: {
    backgroundColor: theme.palette.secondary.main,
    // color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  aboutDiv: {
      padding: theme.spacing.unit * 6,
      [theme.breakpoints.up('md')]: {
          paddingRight: 0,
      },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  mainTitle: {
    paddingTop: '15%',
    flexGrow: 1,
    marginLeft: '9%',
    textAlign: 'left',
    padding: theme.spacing.unit * 6,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 5}px`,
  },
  root2: {
    flexGrow: 1,
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 5}px`,
  },
  featuredPicture: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  courseName: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
          paddingRight: 0,
      },
  },
  largeIcon: {
    width: 80,
    height: 80,
  },
});

export default homeComponentStyles;
