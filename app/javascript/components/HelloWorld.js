import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();


class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Button variant="raised" color="primary">
            {this.props.greeting}
          </Button>
        </MuiThemeProvider>

      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
