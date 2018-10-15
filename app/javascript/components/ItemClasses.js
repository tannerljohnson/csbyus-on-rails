import React from "react"
import PropTypes from "prop-types"
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
        window.location = this.props.hyperlink
    }

    render() {
        //TODO: make the router working
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
