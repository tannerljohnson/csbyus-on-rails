import Background from '../../../images/HomePageBackground.JPG';

const homeComponentStyles = theme => ({
  appBar: {
    position: 'fixed',
    backgroundColor: theme.palette.primary.purple,
    fontFamily: theme.Typography.fontFamily[0],

  },
  drawerMenuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  headerList: {
    padding: theme.spacing.unit * 2,
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
  newFontDescription: {
    fontFamily: theme.Typography.fontFamily[0],
    fontSize: 15,
  },
  newFontAbout: {
    fontFamily: theme.Typography.fontFamily[0],
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  aboutStory: {
    fontFamily: theme.Typography.fontFamily[0],
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  individualBioCard: {
    flex: '1 0 auto',
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
  whiteFontMission: {
    fontFamily: theme.Typography.fontFamily[0],
    color: theme.palette.primary.white,
    fontSize: 20,
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
    backgroundColor: theme.palette.primary.white,
    // textAlign: 'center',
    alignItems: 'center',
    paddingTop: '0%',
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
  missionContent: {
    marginLeft: "4%",
    marginRight: "4%",
    paddingBottom: "4%",
    padding: theme.spacing.unit * 6,
  },
  video: {
    position: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 'auto',
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      display: 'flex',
    },
  },
  impactPicture: {
    position: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    flexWrap: 'wrap',

  },
  heroContent: {
    maxWidth: 600,
    // margin: '0 auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
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
  homeLayout: {
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  layout2: {
    width: 'auto',
    backgroundColor: theme.palette.primary.white,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: '1%',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  postLayout: {
    width: 'auto',
    backgroundColor: theme.palette.primary.white,
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
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
    backgroundColor: theme.palette.primary.lightblue, // change color here
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
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,

    },
  },
  aboutContent: {
    paddingBottom: "4%",
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
    alignItems: 'stretch',
    flexDirection: 'column',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.white,
    flexGrow: 1,
    flexWrap: 'wrap',
    // padding: `${theme.spacing.unit * 5}px`,
    paddingBottom: "0%",
  },
  root2: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.white,
    flexWrap: 'wrap',
    paddingBottom: `${theme.spacing.unit * 5}px`,
    paddingTop: `${theme.spacing.unit * 5}px`,
  },
  postRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.white,
    flexWrap: 'wrap',
    paddingBottom: `${theme.spacing.unit * 5}px`,
    paddingTop: `${theme.spacing.unit * 1}px`,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
  },
  root3: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.darkgrey,
    flexWrap: 'wrap',
    paddingBottom: "0%",
  },
  root4: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.white,
    flexWrap: 'wrap',
    paddingBottom: `${theme.spacing.unit * 5}px`,
  },
  logoFormat: {
    flexGrow: 0,
    backgroundColor: theme.palette.secondary.light,
    justifyContent: 'center',
    alignItems: 'center',
    //width: '150%',
    height: 200,
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 0}px`,
    [theme.breakpoints.up('md')]: {

    },
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
  },
  descriptionCardGrid: {
    padding: theme.spacing.unit * 2,
    elevation: 5,
  },
  descriptionCard: {
    display: 'flex',
  },
  descriptionCardDetails: {
    flex: 1,
  },
  h2: {
    [theme.breakpoints.up('sm')]: {
    },
  },
  h5: {
    [theme.breakpoints.up('sm')]: {
    },
  },
  homeMainTitle: {
    paddingTop: '0%',
    backgroundColor: theme.palette.secondary.light,
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bioMedia: {
    width: 200,
  },
  bioCard: {
    display: 'flex',
    height: 300,
  },
  aboutCard: {
    height: 400,
  },
  videoTitle: {
    fontFamily: theme.Typography.fontFamily[0],
    marginTop: theme.spacing.unit * 3,
  },
  meetUsTitle: {
    paddingTop: '4%',
  },
  bioMediaGrid: {
    paddingTop: '4%',
  },
  postCardImage: {
    width: 200,
  },
  postCard: {
    display: 'flex',
  },
  postCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  postCardContent: {
    flex: '1 0 auto',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },

});

export default homeComponentStyles;
