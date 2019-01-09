const courseVersionsPageComponentStyles = theme => ({
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
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
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
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    root2: {
      flexGrow: 1,
      flexWrap: 'wrap',
      padding: `${theme.spacing.unit * 5}px`,
    },
});

export default courseVersionsPageComponentStyles;
