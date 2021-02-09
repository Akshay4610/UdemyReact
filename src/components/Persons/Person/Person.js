import React, { Component } from 'react';
import classes from'./Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import Proptypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('Person.js rendering...');
    return (
      <Aux>
        {this.context.authenticated ? 'Authenticated': 'Please login'}
        <p onClick={this.props.click}>
          Hi I am a {this.props.name} and I am {this.props.age} years old
        </p>
        {this.props.children ? <span>{this.props.children}</span> : null}
        <input 
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef } />
      </Aux>
    );
  }
}

Person.proptTypes = {
  click: Proptypes.func,
  name: Proptypes.string,
  age: Proptypes.number,
  changed: Proptypes.func,
  isAuth: Proptypes.bool
}

export default withClass(Person, classes.person);