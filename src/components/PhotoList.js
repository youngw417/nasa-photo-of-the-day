
import React from "react";
import PhotoCard from "./PhotoCard";


const PhotoList = (props) => {

    return (
        <div className = "photoMars">
        
        {
            props.nasaData.map( (item, index)  => {
                if ( index < 15 )
                return <PhotoCard key = {index} myItem = {item} />
            })
        }
        </div>



    )

}

export default PhotoList;