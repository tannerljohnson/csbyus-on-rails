import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class TeamCard extends React.Component {
  render () {

    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography component="p">
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

TeamCard.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string
};
export default CurriculumCard
