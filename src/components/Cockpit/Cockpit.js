import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        toggleBtnRef.current.click();
        return () => {
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
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={classes.button}
          onClick={props.clicked}
          ref={toggleBtnRef}
        >
          Toggle persons
        </button>
        <button onClick={authContext.login}>Login</button>
        
        
      </div>
    );
}

export default React.memo(Cockpit);
