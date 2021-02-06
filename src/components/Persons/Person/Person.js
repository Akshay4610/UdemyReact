import React from 'react';
import classes from'./Person.module.css';

const Person = ({ name, age, click, changed, children }) => {
  return (
    <div className={classes.person}>
      <p onClick={click}>
        Hi I am a {name} and I am {age} years old
      </p>
      {children ? <span>{children}</span> : null}
      <input type="text" onChange={changed} />
    </div>
  );
};

export default Person;