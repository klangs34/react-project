import React, { Component } from 'react';
import classes from './App.css';
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

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

      const person = {
        ...this.state.persons[personIndex]
      };

      //or const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = e.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

     this.setState({ persons: persons} );
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
                changed = {( e ) => this.nameChangedHandler( e, person.id )}
                name = {person.name} 
                age = {person.age} />
            })}
          </div> 
        )

        style.backgroundColor = 'red';
    
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);  //classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App!</h1>
        <p className={assignedClasses.join(' ')}>This Really Works!</p>
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
