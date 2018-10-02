import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router";

/**
 *
 */
class CurriculaSecButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            redirect: true
        });
        //FIXME: delete this line
        console.log("Button clicked!")
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.props.hyperlink}/>
        }
        return (
            <button className = "secButton" onClick={this.handleClick}>
                hello
                {this.props.secNum}
                {this.props.secName}
            </button>
        )
    };
}

CurriculaSecButton.propTypes = {
    secNum: PropTypes.number,
    secName: PropTypes.string,
    hyperlink: PropTypes.string,
};

export default CurriculaSecButton
