import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import Remarkable from 'remarkable';

// import RawMarkdown from '../../assets/data/posts/blog-post.1.md';

class MarkdownTest extends React.Component {

  getProcessedMarkup() {
    var md = new Remarkable();
    return { __html: md.render("# Test") };
  }

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div className={classes.root2}>
          <main className={classes.layout2}>
            <Card>
              <CardContent>
              <div
                className="content"
                dangerouslySetInnerHTML={this.getProcessedMarkup()}
                />
              </CardContent>
            </Card>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(homeComponentStyles)(MarkdownTest);
