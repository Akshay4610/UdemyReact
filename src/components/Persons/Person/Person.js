import React, { Component } from 'react';
import classes from'./Person.module.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  render() {
    console.log('Person.js rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hi I am a {this.props.name} and I am {this.props.age} years old
        </p>
        {this.props.children ? <span>{this.props.children}</span> : null}
        <input type="text" onChange={this.props.changed} />
      </Aux>
    );
  }
}

export default Person;