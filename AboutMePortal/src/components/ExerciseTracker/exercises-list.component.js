import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar.component";

const container = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row"
};
const tableInfo = {
  display: "flex",
  justifyContent: "flex-start",
  border: "4px solid red"
};

const propsContainer = {
  display: "flex",
  border: "7px solid green",
  justifyContent: "flex-end"
};
const title = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};
const Exercise = props => (
  <tr style={propsContainer}>
    <td>{props.exercise.username}</td>
    <br />
    <td>{props.exercise.description}</td>
    <br />
    <td>{props.exercise.duration}</td>
    <br />
    <td>{props.exercise.date.substring(0, 10)}</td>
    <br />
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3 style={title}> Logged Exercises</h3>
        <div style={container}>
          <table style={tableInfo}>
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description </th>
                <th>Duration </th>
                <th>Date </th>
                <th>Actions</th>
              </tr>
              <tbody>{this.exerciseList()}</tbody>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
