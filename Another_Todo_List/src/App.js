import React from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "take out the beautiful recruiter",
          completed: false
        },
        {
          id: 2,
          title: "take out the trash",
          completed: false
        },
        {
          id: 3,
          title: "take out my mountain bike",
          completed: false
        },
        {
          id: 4,
          title: "take out your .........",
          completed: false
        }
      ]
    };
    ///Toggle complete
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      })
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
