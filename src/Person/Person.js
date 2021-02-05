import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    border: 1px solid #ccc;
    box-shadow: 0 1px 3px #eee;
    padding: 16px;
    text-align: center;
    margin: 10px auto;

    @media (min-width: 500px)  {
        width: 450px;
    }
`;

const Person = ({ name, age, click, changed, children }) => {
  return (
    <StyledDiv>
      <p onClick={click}>
        Hi I am a {name} and I am {age} years old
      </p>
      {children ? <span>{children}</span> : null}
      <input type="text" onChange={changed} />
    </StyledDiv>
  );
};

export default Person;