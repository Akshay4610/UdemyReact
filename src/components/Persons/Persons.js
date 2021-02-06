import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js should component update');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('Persons.js componentDIdUpdate');
    }

    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount');
    }

    render() {
        console.log('Persons.js rendering')
        return this.props.persons.map((person, index) => (
            <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)}
            />
        ));
    }
}

export default Persons;
