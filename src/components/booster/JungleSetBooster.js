
import { useNavigate } from "react-router-dom";
import "./Booster.css"
import { JSCPacker, JSCRPacker, JSEPacker, JSUCPacker } from "./PackBuilderJungle";
import { useState, useEffect } from 'react';
import React from "react";



const localActiveUser = localStorage.getItem("activeUser")
const activeUserObject = JSON.parse(localActiveUser)




function JungleSetBooster() { 
  const navigate = useNavigate()
  const [boosterPackJ, setBoosterPackJ] = useState([]);
  const [cardsJ, setCardsJ] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState([]);

  useEffect(
    () => {
      const JSCR = JSCRPacker()
      const JSUC = JSUCPacker()
      const JSC = JSCPacker()
      const JSE = JSEPacker()
      let bPackArray = [JSCR, JSUC, JSC, JSE]
      setBoosterPackJ(bPackArray.flat())
    },
    [] // When this array is empty, you are observing initial component state
  )

    const taco = (i) => {
     if(cardsJ[i]){  
       return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardsJ[i])
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
    cardsJ.push({
      userId: activeUserObject.id,
      image: event.target.src,
      isFavorite: false
    })

    console.log(event.target.src);
  };



    return (
      <div className="Booster">
 

          {
      boosterPackJ.map( boosterJ => {
        return(
          <div className="boosterpack" key={boosterJ.id} >
            <p className="boosterContainer" > <img className="booster" src={boosterJ.images?.large} id={boosterJ.id} onClick={handleClick} /> </p>
          </div>

        )
      })
    }
    <button className="addButton" onClick={(event) => {

event.preventDefault()
cardsJ.forEach(cardJ => {

     fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardJ)
      }).then (
        r => r.json()
      ) .then()
})    

navigate("/Booster")


    }}> Save Current Selection </button>
      </div>
    );
  }

  export default JungleSetBooster;


  



