import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router";

class SecButton extends React.Component{
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
        //TODO: make the router working
        if (this.state.redirect) {
            return <Redirect push to={this.props.hyperlink}/>
        }
        return (
            <button className = "secButton" onClick={this.handleClick}>
                {this.props.secNum}
                <br />
                {this.props.secName}
            </button>
        )
    };
}

SecButton.propTypes = {
    secNum: PropTypes.number.isRequired,
    secName: PropTypes.string.isRequired,
    hyperlink: PropTypes.string.isRequired,
};

 export default SecButton
