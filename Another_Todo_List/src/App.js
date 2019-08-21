import React from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

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
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
