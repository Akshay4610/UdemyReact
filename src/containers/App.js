import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import classes from './App.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { id: "awew", name: "Max", age: 28 },
      { id: "bbasd", name: "Manu", age: 29 },
      { id: "asda", name: "Satephanie", age: 25 },
    ],
    otherState: "This is other state",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps')
    return state;
  }

  componentDidMount() {
    console.log('Component did mount');
  }

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

  toggleCockpit =() => {
    const cockpit = this.state.showCockpit;
    this.setState({showCockpit: !cockpit});
  }

  render() {
    console.log('App.js render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
        {this.state.showCockpit ? <Cockpit personsLength={this.state.persons.length} clicked={this.togglePersonsHandler} /> : null}
        {persons}
        <p>{this.state.otherState}</p>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
