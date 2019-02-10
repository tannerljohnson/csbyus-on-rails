import Background from '../../../images/HomePageBackground.JPG';


const homeComponentStyles = theme => ({
  appBar: {
    position: 'fixed',
    backgroundColor: theme.palette.primary.purple,
  },
  incubateAvatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.lightblue,
    width: 60,
    height: 60,
  },
  shareAvatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.orangepink,
    width: 60,
    height: 60,
  },
  supportAvatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.green,
    width: 60,
    height: 60,
  },
  newFont: {
    fontFamily: theme.Typography.fontFamily[0],
  },
  blueFont: {
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.lightblue,
  },
  orangeFont: {
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.orangepink,
  },
  darkFont: {
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.darkturq,
  },
  whiteFont: {
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.white,
  },

  bgimg: {
    backgroundImage: `url(${Background})`,
    position: 'relative',
    width: '100%',
    height: 500,
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  icon: {
    margin: theme.spacing.unit * 2,
    width: 40,
    height: 40,
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.secondary.darkgrey,
    color: theme.palette.primary.white,
    marginBottom: theme.spacing.unit * 4,
  },
  ourImpact: {
    backgroundColor: theme.palette.primary.lightblue,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 5}px`,
    marginLeft: theme.spacing.unit * 25,
    marginRight: theme.spacing.unit * 25,
  },
  heroUnit: {
    backgroundColor: theme.palette.secondary.light,
    textAlign: 'center',
  },
  heroUnit2: {
    backgroundColor: theme.palette.secondary.darkgrey,
    textAlign: 'center',
  },
  whiteUnit: {
    backgroundColor: theme.palette.secondary.white,
    textAlign: 'center',
    color: theme.palette.primary.orangepink,
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
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.darkturq,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingTop: '1%',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  layout2: {
    width: 'auto',
    backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: '1%',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  curriculaTitleHeader: {
    backgroundColor: theme.palette.primary.green, // change color here
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.up('md')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  newsTitleHeader: {
    backgroundColor: theme.palette.secondary.light, // change color here
    // color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.up('md')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
    backgroundColor: theme.palette.background.paper,
    fontFamily: theme.Typography.fontFamily[0],
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
  },
  title2: {
    backgroundColor: theme.palette.primary.darkgrey,
    fontFamily: theme.Typography.fontFamily[0],
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    color: theme.palette.primary.orangepink,
  },
  horizCards: {
    backgroundColor: theme.palette.background.paper,
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    flexGrow: 1,
    flexWrap: 'wrap',
    // padding: `${theme.spacing.unit * 5}px`,
    paddingBottom: "0%",
  },
  root2: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.light,
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 5}px`,
  },
  root3: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.darkgrey,
    flexWrap: 'wrap',
    paddingBottom: "0%",
  },
  logoFormat: {
    flexGrow: 0,
    backgroundColor: theme.palette.secondary.light,
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 0}px`,
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
      fontFamily: theme.Typography.fontFamily[0],
  },
  largeIcon: {
    width: 80,
    height: 80,
  },
  newsCard: {
    height: 365,
  },
  newsMedia: {
    height: 140,
  },
  curriculumCard: {
    height: 250,
  }
});

export default homeComponentStyles;
