import React from "react";


function PhotoCard(props) {


    return (
        <div className = "card" >
            {/* {
                document.getElementById("card").style.display= "block"

            } */}
            <p>Earth Date: {props.myItem.earth_date}</p>
            <p>Name: {props.myItem.rover.name}</p>
            <p>Landing Date: {props.myItem.rover.landing_date}</p>
            <p>Launching Date: {props.myItem.rover.launch_date}</p>
            <p>Status: {props.myItem.rover.status}</p>
            
            <div classNmae = "img_container">
                <img src = {props.myItem.img_src} className = "marsImg"/>
            
            </div>

        </div>


    )


}


export default PhotoCard;