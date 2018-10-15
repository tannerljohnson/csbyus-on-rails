import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router"
import ListItem from '@material-ui/core/ListItem';

class ItemClasses extends React.Component{
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
            <ListItem
                button onClick={this.handleClick}>
                {this.props.secNum}
                <br />
                {this.props.secName}
            </ListItem>
        )
    };
}

ItemClasses.propTypes = {
    secNum: PropTypes.number,
    secName: PropTypes.string,
    hyperlink: PropTypes.string,
};

export default ItemClasses
