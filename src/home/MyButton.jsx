import React from 'react';
import {Button} from 'reactstrap';

export default function MyButton(props) { return (
   <Button color="primary" num={props.number} 
           onClick={props.onClick}  >
               increase {props.number}
   </Button>
)};