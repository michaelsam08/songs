import React from "react";
import propTypes from "prop-types";

const btnStyle = {
  background: "#ff0000",
  color: "white",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: "lightBlue",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todos: propTypes.object.isRequired
};
export default TodoItem;
