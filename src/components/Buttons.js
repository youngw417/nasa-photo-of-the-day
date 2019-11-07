
import React from 'react';
import { Button } from 'reactstrap';

const MyButton = (props) => {
  return (
    <div>
       <Button color="primary" onClick = {() => props.setNum(5)}>Show 5 photos</Button>{' '}
      <Button color="secondary" onClick = {() => props.setNum(10)}>Show 10 photots</Button>{' '}
      <Button color="success" onClick = {() => props.setNum(20)}>show 20 photos</Button>{' '}
      <Button color="info" onClick = {() => props.setNum(props.nasaData.length)}>Show all photos</Button>
     </div>
      
  );
}

export default MyButton;