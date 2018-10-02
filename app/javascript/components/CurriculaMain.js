import React from "react"
import PropTypes from "prop-types"

/**
 * @para secNum:float section number is form x.x
 * @para secName:string section name
 * @para form:string either text or video
 */
class CurriculaMain extends React.Component {
  render () {
    return (
      <React.Fragment>
        Sec Num: {this.props.secNum}
        Sec Name: {this.props.secName}
        Form: {this.props.form}
      </React.Fragment>
    );
  }
}

CurriculaMain.propTypes = {
  secNum: PropTypes.number,
  secName: PropTypes.string,
  form: PropTypes.string
};
export default CurriculaMain
