
import { useNavigate } from "react-router-dom";
import "./Booster.css"
import { FSCPacker, FSCRPacker, FSEPacker, FSUCPacker } from "./PackBuilderFossil";
import { useState, useEffect } from 'react';
import React from "react";



const localActiveUser = localStorage.getItem("activeUser")
const activeUserObject = JSON.parse(localActiveUser)




function FossilSetBooster() { 
  const navigate = useNavigate()
  const [boosterPackF, setBoosterPackF] = useState([]);
  const [cardsF, setCardsF] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState([]);

  useEffect(
    () => {
      const FSCR = FSCRPacker()
      const FSUC = FSUCPacker()
      const FSC = FSCPacker()
      const FSE = FSEPacker()
      let bPackArray = [FSCR, FSUC, FSC, FSE]
      setBoosterPackF(bPackArray.flat())
    },
    [] // When this array is empty, you are observing initial component state
  )

    const taco = (i) => {
     if(cardsF[i]){  
       return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardsF[i])
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
    cardsF.push({
      userId: activeUserObject.id,
      image: event.target.src,
      isFavorite: false
    })

    console.log(event.target.src);
  };



    return (
      <div className="Booster">
 

          {
      boosterPackF.map( boosterF => {
        return(
          <div className="boosterpack" key={boosterF.id} >
            <p className="boosterContainer" > <img className="booster" src={boosterF.images?.large} id={boosterF.id} onClick={handleClick} /> </p>
          </div>

        )
      })
    }
    <button className="addButton" onClick={(event) => {

event.preventDefault()
cardsF.forEach(cardJ => {

     fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cardJ)
      }).then (
        r => r.json()
      )
})    

navigate("/Booster")


    }}> Save Current Selection </button>
      </div>
    );
  }

  export default FossilSetBooster;


  



