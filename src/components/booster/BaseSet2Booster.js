
import { useNavigate } from "react-router-dom";
import "./Booster.css"
import { BS2CRPacker, BS2UCPacker, BS2CPacker, BS2EPacker } from './PackBuilderBaseSet2';
import { useState, useEffect } from 'react';
import React from "react";


const localActiveUser = localStorage.getItem("activeUser")
const activeUserObject = JSON.parse(localActiveUser)




function BaseSet2Booster() { 
  const navigate = useNavigate()
  const [boosterPackBS2, setBoosterPackBS2] = useState([]);
  const [cardsBS2, setCardsBS2] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState([]);

  useEffect(
    () => {
      const BS2CR = BS2CRPacker()
      const BS2UC = BS2UCPacker()
      const BS2C = BS2CPacker()
      const BS2E = BS2EPacker()
      let bPackArray = [BS2CR, BS2UC, BS2C, BS2E]
      setBoosterPackBS2(bPackArray.flat())
    },
    [] // When this array is empty, you are observing initial component state
  )

    const taco = (i) => {
     if(cardsBS2[i]){  
       return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardsBS2[i])
      })
      .then(r => r.json() )
      .then(() =>{
          let j = i++
          taco(j)
      })
    }
  }

  const handleClick = (event) => {
    event.target.classList.toggle('unclickable')
    cardsBS2.push({
      userId: activeUserObject.id,
      image: event.target.src,
      isFavorite: false
    })

    console.log(event.target.src);
  };



    return (
      <div className="Booster">
 

          {
      boosterPackBS2.map( boosterBS2 => {
        return(
          <div className="boosterpack" key={boosterBS2.id} >
            <p className="boosterContainer" > <img className="booster" src={boosterBS2.images?.large} id={boosterBS2.id} onClick={handleClick} /> </p>
          </div>

        )
      })
    }
    <button className="addButton" onClick={(event) => {

event.preventDefault()
// taco(0)
// cards.forEach(x, index => {
//   if(index === 0 ){

cardsBS2.forEach(cardBS2 => {

     fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardBS2)
      }).then (
        r => r.json()
      ) .then()
})    

navigate("/Booster")


    }}> Save Current Selection </button>
      </div>
    );
  }

  export default BaseSet2Booster;


  



