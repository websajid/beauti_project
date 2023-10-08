import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
 


export default function DarkModeON() {
  const [dartmode,setmode]= useState("click me");
  const mystyle = {
    color: "white",
    backgroundColor : 'black'
  }
  
const tooglemode =()=>{

}
  

  return (
    <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" style={mystyle}>
        <Accordion.Header style={mystyle}>Accordion Item #2</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Button variant="warning my-3" onClick={tooglemode}>{dartmode}</Button>{' '}
    </div> 
  );
}
