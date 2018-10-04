import React from "react"
import PropTypes from "prop-types"
class AboutMe extends React.Component {
  render () {
    return (
      <React.Fragment>
        Name: {this.props.name}
        Fun Fact: {this.props.funFact}
      </React.Fragment>
    );
  }
}
const name = <AboutMe name="Judyth"/>;
const funFact = <AboutMe funFact="I love playing soccer, even if I'm not good at it."

AboutMe.propTypes = {
  name: PropTypes.string,
  funFact: PropTypes.string
};
export default AboutMe
