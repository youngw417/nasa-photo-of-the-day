import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoList from "./components/PhotoList";
import { Button } from 'reactstrap';
import MyButton from "./components/Buttons";

import styled from 'styled-components';

const H1Styled = styled.h1`
  margin-bottom: 40px;
  color: brown;

`;



function App() {

  const urls = [{name: "Photos from Mars", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ie8fgk3triuT0iOQ9ox4XyBKX4UZc3LBNgmZ4UF7"}, {name: "Astronomy Pictures of the Day", url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"}]
  
  const [data, setData] = useState([]);
  
  //const [display, setDisplay] = useState([5, 10, 20, 30]);

  const [num, setNum] =useState(null);
  const [currentUrl, setUrl] = useState(urls[0].url);




  useEffect(() => {

    
    axios
      .get(
        currentUrl
      )
      .then(response => {
        //console.log(response);
        const nasaData = response.data.photos;
        setData(nasaData);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <H1Styled>Photos from Mars</H1Styled>
      {/* <button onClick = {() => setNum(5)}>Show 5 Photos</button> */}
     
     <MyButton num = {num} setNum = {setNum} nasaData={data}/>
      <div className="main_container">
        <PhotoList nasaData={data}  num ={num}  />
      </div>
    </div>
  );
}

export default App;
