import React from "react"
import PropTypes from "prop-types"
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {

  componentDidUpdate(prevProps) {
    console.log(this.props); // no location prop
    if (this.props.location !== prevProps.location) {
      // never triggered
      window.scrollTo(0, 0);
    }
  }

  render () {
    return (
      this.props.children
    );
  }
}

export default withRouter(ScrollToTop)
