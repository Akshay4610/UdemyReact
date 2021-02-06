import React from 'react'
import classes from './Cockpit.module.css';


const Cockpit = (props) => {

    const assignedClasses = [];

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <=1 ) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>I am a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={classes.button} onClick={props.clicked}>
            Toggle persons
            </button>
        </div>
    );
}

export default Cockpit
