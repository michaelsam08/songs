import React, { Component } from 'react';
import Listitem from './FamilyMember'
import './App.css';

class App extends Component {
  state = {

          familymember: ['John', 'Patty', 'Michael', 'James', 'Julia']

       };


  renderFamilyMembers=()=> {
    return this.state.familymember.map((member, index)=>{
      return(
        <Listitem color123="red" name={member} />
      );
      });
  }
  render () {
    return (
      <div className="App">
        {this.renderFamilyMembers()}
      </div>
    )

  }

}

export default App;
