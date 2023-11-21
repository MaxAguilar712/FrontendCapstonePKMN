
import { useNavigate } from "react-router-dom";
import "./Booster.css"
import { BSCRPacker, BSUCPacker, BSCPacker, BSEPacker } from './PackBuilder';
import { useState, useEffect } from 'react';
import React from "react";


const localActiveUser = localStorage.getItem("activeUser")
const activeUserObject = JSON.parse(localActiveUser)




function BaseSetBooster() { 
  const navigate = useNavigate()
  const [boosterPack, setBoosterPack] = useState([]);
  const [cards, setCards] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState([]);

  useEffect(
    () => {
      const BSCR = BSCRPacker()
      const BSUC = BSUCPacker()
      const BSC = BSCPacker()
      const BSE = BSEPacker()
      let bPackArray = [BSCR, BSUC, BSC, BSE]
      setBoosterPack(bPackArray.flat())
    },
    [] // When this array is empty, you are observing initial component state
  )

    const taco = (i) => {
     if(cards[i]){  
       return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(cards[i])
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
    cards.push({
      userId: activeUserObject.id,
      image: event.target.src,
      isFavorite: false
    })

    console.log(event.target.src);
  };



    return (
      <div className="Booster">
 

          {
      boosterPack.map( booster => {
        return(
          <div className="boosterpack" key={booster.id} >
            <p className="boosterContainer" > <img className="booster" src={booster.images?.large} id={booster.id} onClick={handleClick} /> </p>
          </div>

        )
      })
    }
    <button className="addButton" onClick={(event) => {

event.preventDefault()
// taco(0)
// cards.forEach(x, index => {
//   if(index === 0 ){

cards.forEach(card => {

     fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(card)
      }).then (
        r => r.json()
      )
})    

navigate("/Booster")


    }}> Save Current Selection </button>
      </div>
    );
  }

  export default BaseSetBooster;


  



