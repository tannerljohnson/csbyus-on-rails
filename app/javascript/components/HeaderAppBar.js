import React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainMenu from './MainMenu';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';


const styles = theme => ({
    appBar: {
        position: 'fixed',
        paddingTop: '0%',
    },

    menuButton: {
        marginLeft: 0,
        marginRight: 200,
    },
});


class HeaderAppBar extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <MainMenu className={classes.menuButton}/>
                    <Typography variant="title" color="inherit" noWrap>
                        CSbyUs
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

HeaderAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};
const HeaderWithRouter = withRouter(HeaderAppBar);
export default withStyles(styles)(HeaderWithRouter);
