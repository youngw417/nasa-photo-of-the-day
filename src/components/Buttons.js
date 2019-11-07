
import React from "react";
import Button from "./Button"
import PhotoList from "./PhotoList";
const Buttons = (props) => {


    return (
    <div className = "buttons">
        { props.display.map ( (item, index) => 
             <Button key = {index} item = {item} nasaData={props.nasaData}/>)
           
        }

   {/* <PhotoList nasaData={props.nasaData} num ={props.num} />
   {console.log(props.num)} */}
    </div>

   )
}

export default Buttons;