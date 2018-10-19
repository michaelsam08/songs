import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../App.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "white",
    border: "2px solid purple"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
    border: "2px solid black"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  primary: {},
  icon: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
    border: "2px solid black"
  }
});

class CoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "subject",
      grade: "grade"

      // name: "hai"
    };
  }
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(response => {});
  }

  handleChange = event => {
    debugger;
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form className={classes.root} autoComplete="off">
          <TextField
            label=""
            id="margin-dense"
            placeholder="Title"
            className={classes.textField}
            helperText="Title"
            margin="dense"
          />
        </form>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Primary Subject Area</InputLabel>
            <Select
              value={this.state.subject}
              onChange={this.handleChange}
              inputProps={{
                name: "subject",
                id: "subject-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Abilities/Disabilities</MenuItem>
              <MenuItem value={2}>Art</MenuItem>
              <MenuItem value={3}>Bilingual</MenuItem>
              <MenuItem value={4}>Drama</MenuItem>
              <MenuItem value={5}>Foreign Language</MenuItem>
              <MenuItem value={6}>Health</MenuItem>
              <MenuItem value={7}>Interdisciplinary</MenuItem>
              <MenuItem value={8}>Language Arts</MenuItem>
              <MenuItem value={9}>Mathmatics</MenuItem>
              <MenuItem value={10}>Music</MenuItem>
              <MenuItem value={11}>Other</MenuItem>
              <MenuItem value={12}>Physical Education</MenuItem>
              <MenuItem value={13}>Reading</MenuItem>
              <MenuItem value={14}>Science</MenuItem>
              <MenuItem value={15}>Social Skills</MenuItem>
              <MenuItem value={16}>Social Studies</MenuItem>
              <MenuItem value={17}>Special Education</MenuItem>
              <MenuItem value={18}>Speech Language Pathology</MenuItem>
              <MenuItem value={19}>Technology</MenuItem>
              <MenuItem value={20}>Writing</MenuItem>
            </Select>
          </FormControl>
        </form>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">
              Recommended Grade Level
            </InputLabel>
            <Select
              value={this.state.grade}
              onChange={this.handleChange}
              inputProps={{
                name: "grade",
                id: "grade-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>EC</MenuItem>
              <MenuItem value={2}>PK</MenuItem>
              <MenuItem value={3}>K</MenuItem>
              <MenuItem value={4}>1</MenuItem>
              <MenuItem value={5}>2</MenuItem>
              <MenuItem value={6}>3</MenuItem>
              <MenuItem value={7}>4</MenuItem>
              <MenuItem value={8}>5</MenuItem>
              <MenuItem value={9}>6</MenuItem>
              <MenuItem value={10}>7</MenuItem>
              <MenuItem value={11}>8</MenuItem>
              <MenuItem value={12}>Primary</MenuItem>
              <MenuItem value={13}>Intermediate</MenuItem>
              <MenuItem value={14}>MS / Junior Highchool</MenuItem>
              <MenuItem value={15}>High School</MenuItem>
              <MenuItem value={16}>Adult Learner</MenuItem>
              <MenuItem value={17}>K - 12</MenuItem>
              <MenuItem value={18}>Multi Grade</MenuItem>
            </Select>
          </FormControl>
        </form>
      </React.Fragment>
    );
  }
}

CoverPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverPage);
