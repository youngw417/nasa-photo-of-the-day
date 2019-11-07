import React from "react";
import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody, CardLink,
  CardSubtitle, Col
  } from 'reactstrap';

const WrapImg = styled.img`

&hover: {
    transform: scale(1.4)}

`;

function PhotoCard(props) {


    return (

        <Col sm="4">
        <Card style={{ backgroundColor: '#333', borderColor: '#333', height: '400px', marginBottom: '10px', overflow:'hidden'}}>
       
        
        <CardBody>
          
          <CardSubtitle>Earth Date: {props.myItem.earth_date}</CardSubtitle>
          <CardSubtitle>Name: {props.myItem.rover.name}</CardSubtitle>
          <CardSubtitle>Landing Date: {props.myItem.rover.landing_date}</CardSubtitle>
          <CardSubtitle>Launching Date: {props.myItem.rover.launch_date}</CardSubtitle>
          <CardSubtitle>Status: {props.myItem.rover.status}</CardSubtitle>

        </CardBody>
        <WrapImg width="100%" src={props.myItem.img_src} alt="Card image cap"/>
        <CardBody>
          
        </CardBody>

      </Card>
      </Col>

        // <div className = "card" >
        //     {/* {
        //         document.getElementById("card").style.display= "block"

        //     } */}
        //     <p>Earth Date: {props.myItem.earth_date}</p>
        //     <p>Name: {props.myItem.rover.name}</p>
        //     <p>Landing Date: {props.myItem.rover.landing_date}</p>
        //     <p>Launching Date: {props.myItem.rover.launch_date}</p>
        //     <p>Status: {props.myItem.rover.status}</p>
            
        //     <div classNmae = "img_container">
        //         <img src = {props.myItem.img_src} className = "marsImg"/>
            
        //     </div>

        // </div>


    )


}


export default PhotoCard;