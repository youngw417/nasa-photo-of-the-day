
import React from "react";
import PhotoCard from "./PhotoCard";
import styled from 'styled-components'

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: white;
    margin-top: 30px;


`;

const PhotoList = (props) => {

    return (
        <WrapperDiv>
        
        {
            props.nasaData.map( (item, index)  => {
                console.log(props.num);
             if ( index < props.num )
                return <PhotoCard key = {index} myItem = {item} />
            })
        }
        </WrapperDiv>



    )

}

export default PhotoList;