import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import BuildIcon from '@material-ui/icons/Build';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

var logo;

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};

class DescriptionCard extends React.Component {

  generateLogo(classes) {
    // incubate
    if (this.props.avatar === "incubate" && this.props.icon === "build") {
      logo = <Avatar className={classes.incubateAvatar}>
                <BuildIcon className={classes.icon} />
              </Avatar>;
    // share
    } else if (this.props.avatar === "share" && this.props.icon === "share") {
      logo = <Avatar className={classes.shareAvatar}>
                <ShareIcon className={classes.icon} />
              </Avatar>;
    // support
    } else if (this.props.avatar === "support" && this.props.icon === "favorite") {
      logo = <Avatar className={classes.supportAvatar}>
                <FavoriteIcon className={classes.icon} />
              </Avatar>;
    }
    else {
      logo = null;
    }
  };



  render () {

    const { classes } = this.props;

    this.generateLogo(classes);
    // if no logo, adjust height or make flex

    return (

      <React.Fragment>
        <div className={classes.title}>
          <Card className={classes.descriptionCard}>
            <div className={classes.descriptionCardDetails}>
              <CardActionArea href={this.props.url}  target="_blank">
                <CardContent>
                  <div className={classes.horizCards}>
                    {logo}
                    <Typography variant="h4" className={classes.newFont}>
                      {this.props.title}
                    </Typography>
                    <div className={classes.whiteUnit}>
                      <List>
                        {generate(
                          <ListItem>
                            <ListItemText
                              primary={<Typography variant="subtitle2" className={classes.newFont}>{this.props.content}</Typography>}
                              align="center"
                            />
                          </ListItem>,
                        )}
                      </List>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

DescriptionCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(DescriptionCard);
