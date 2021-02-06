import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "awew", name: "Max", age: 28 },
      { id: "bbasd", name: "Manu", age: 29 },
      { id: "asda", name: "Satephanie", age: 25 },
    ],
    otherState: "This is other state",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Max", age: 29 },
        { name: "Satephanie", age: 27 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[index],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <=1 ) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>I am a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={classes.button} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
        <p>{this.state.otherState}</p>
      </div>
    );
  }
}

export default App;
