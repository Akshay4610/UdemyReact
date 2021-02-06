import React, { useEffect } from 'react'
import classes from './Cockpit.module.css';


const Cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('Cockpit.js clean up in useEffect');
        };
    }, []);


    useEffect(() => {
        console.log('Second Cockpit.js useEffect');
        return () => {
            console.log('Second Cockpit.js clean up in useEffect');
        };
    })

    const assignedClasses = [];

    if(props.personsLength <=2) {
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <=1 ) {
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

export default React.memo(Cockpit);
