
import { useNavigate } from "react-router-dom";
import "./Booster.css"
import { RSCPacker, RSCRPacker, RSEPacker, RSUCPacker } from "./PackBuilderRocket";
import { useState, useEffect } from 'react';
import React from "react";



const localActiveUser = localStorage.getItem("activeUser")
const activeUserObject = JSON.parse(localActiveUser)




function RocketSetBooster() { 
  const navigate = useNavigate()
  const [boosterPackR, setBoosterPackR] = useState([]);
  const [cardsR, setCardsR] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState([]);

  useEffect(
    () => {
      const RSCR = RSCRPacker()
      const RSUC = RSUCPacker()
      const RSC = RSCPacker()
      const RSE = RSEPacker()
      let bPackArray = [RSCR, RSUC, RSC, RSE]
      setBoosterPackR(bPackArray.flat())
    },
    [] // When this array is empty, you are observing initial component state
  )

    const taco = (i) => {
     if(cardsR[i]){  
       return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardsR[i])
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
    cardsR.push({
      userId: activeUserObject.id,
      image: event.target.src,
      isFavorite: false
    })

    console.log(event.target.src);
  };



    return (
      <div className="Booster">
 

          {
      boosterPackR.map( boosterR => {
        return(
          <div className="boosterpack" key={boosterR.id} >
            <p className="boosterContainer" > <img className="booster" src={boosterR.images?.large} id={boosterR.id} onClick={handleClick} /> </p>
          </div>

        )
      })
    }
    <button className="addButton" onClick={(event) => {

event.preventDefault()
cardsR.forEach(cardR => {

     fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardR)
      }).then (
        r => r.json()
      ) .then()
})    

navigate("/Booster")


    }}> Save Current Selection </button>
      </div>
    );
  }

  export default RocketSetBooster;


  



