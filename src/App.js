import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Max', age: 28 },
      { id: '1', name: 'Manu', age: 29 },
      { id: '2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (e) => {
     this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                key = {person.id}  
                click = {() => this.deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age} />
            })}
          </div> 
        )

        style.backgroundColor = 'red';
    
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');  //classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p className={classes.join(' ')}>This Really Works!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
         {persons} 
      </div>
    );
  }
}

export default App;
