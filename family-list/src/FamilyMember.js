import React, { Component } from 'react';
import './App.css';

class Listitem extends Component {
    render() {
      return (
         <li style={{color: this.props.color123}}>
           {this.props.name}
         </li>
      )
    }
}

export default Listitem;
