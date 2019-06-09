import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {
  state = {
    persons : [{name:"Michael", age:37},
              {name:"James", age:35},
              {name:"Julia", age:33}
            ]
          }

switchNameHandler = (newName)=>{
//console.log('was clicked!')
//this.state.persons[0].name='Maximilian';
  this.setState({
    persons : [{name:newName, age:37},
              {name:"James", age:135},
              {name:"Shmoolia", age:33}
    ]
  } )
}
nameChangedHandler = (event)=> {
  this.setState({
    persons : [{name:'Michael', age:37},
                {name:event.target.value, age:35},
                {name:"Julia", age:33}
    ]
  } )
}

  render() {
    const  buttcolor ={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
        <div className="App">
          <h1>Hi, Im a React App</h1>
          <p>This is really working!</p>
          <button
            style={buttcolor}
            onClick={()=> this.switchNameHandler('ready for yoga!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Miguelito')}
            changed={this.nameChangedHandler}>Hobbies: drinking, grunting</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      );





      //return React.createElement('div',{className:"App"}, React.createElement('h1', null, 'Is this working?'))
  }
}

export default App;
