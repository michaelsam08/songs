import React, { Component } from "react";
import { connect } from "react-redux";
import { createCard } from "../redux/actions";
import "../App.css";

// const styles = theme => ({
//   createQuestionsWrapper: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     background: "white",
//     border: "2px solid purple",
//     text: "orange"
//   }
// });
class CreateQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whohas: "",
      ihave: ""
    };
  }

  addRow = e => {
    e.preventDefault();
    // const rows = this.state.rows;
    // rows.push({ whohas: this.state.whohas, ihave: this.state.ihave });
    this.setState({
      rows: this.props.rows,
      whohas: "",
      ihave: ""
    });
    return this.props.createCard({
      whohas: this.state.whohas,
      ihave: this.state.ihave
    });
  };
  deleteRow = (e, index) => {
    e.preventDefault();
    const rows = this.state.rows;
    rows.splice(index, 1);
    this.setState({
      rows: rows
    });
  };
  handleInput = (e, inputType) => {
    const stateObj = {};
    stateObj[inputType] = e.target.value;
    this.setState(stateObj);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.addRow(e)}>
          <label htmlFor="whohas">Who has:</label>
          <input
            name="whohas"
            type="text"
            value={this.state.whohas}
            onChange={e => this.handleInput(e, "whohas")}
          />
          <label htmlFor="ihave">I have:</label>
          <input
            name="ihave"
            type="text"
            value={this.state.ihave}
            onChange={e => this.handleInput(e, "ihave")}
          />
          <button type="submit">Add</button>
        </form>
        {this.props.rows.map((row, index) => {
          if (row.ihave && row.whohas) {
            return (
              <form onSubmit={e => this.deleteRow(e, index)}>
                <label for="whohas">Who has:</label>
                <input name="whohas" type="text" value={row.whohas} />
                <label for="ihave">I have:</label>
                <input name="ihave" type="text" value={row.ihave} />
                <button>Delete</button>
              </form>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rows: state.rows
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCard: function(newCard) {
      let action = createCard(newCard);
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuestions);
