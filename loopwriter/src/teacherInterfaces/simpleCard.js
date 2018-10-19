import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateQuestions from "./createQuestions";
import "../App.css";
import { connect } from "react-redux";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whohas: this.props.whohas,
      ihave: this.props.ihave
    };
  }

  render() {
    const classes = this.props.classes;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <React.Fragment>
        {this.props.rows.map(row => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Who has : {row.whohas}
                </Typography>
                <Typography variant="headline" component="h2">
                  {this.props.whohas}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  I have : {row.ihave}
                </Typography>
                <Typography variant="headline" component="h2">
                  {this.props.ihave}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    rows: state.rows
  };
}

const ConnectCreateQuestions = connect(mapStateToProps)(SimpleCard);
export default withStyles(styles)(ConnectCreateQuestions);
