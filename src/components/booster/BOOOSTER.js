import React from "react";

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "./Booster.css"


function BoosterDisplay() { 

    let navigateBS = useNavigate();
    const routeChangeBS = () => {
      let BSpath = `/Booster/BaseSet`;
      navigateBS(BSpath)
    }

    let navigateFS = useNavigate();
    const routeChangeFS = () => {
      let FSpath = `/Booster/FossilSet`;
      navigateFS(FSpath)
    }

    let navigateJS = useNavigate();
    const routeChangeJS = () => {
      let JSpath = `/Booster/JungleSet`;
      navigateJS(JSpath)
    }

    let navigateBS2 = useNavigate();
    const routeChangeBS2 = () => {
      let BS2path = `/Booster/BaseSet2`;
      navigateBS2(BS2path)
    }

    let navigateTRS = useNavigate();
    const routeChangeTRS = () => {
      let TRSpath = `/Booster/RocketSet`;
      navigateTRS(TRSpath)
    }

    return (
      <div className="Booster">
 
        <div className="boosterContainer" onClick={routeChangeBS}>
            <img className="boosterPack1" src="https://www.pokeflightclub.com/cdn/shop/products/Baseset3-pack.png?v=1674181020"/>
        </div>  
        
       <div className="boosterContainer" onClick={routeChangeJS}>
            <img className="boosterPack3" src="https://loosepacks.com/cdn/shop/products/Myproject-1_15_1024x1024.png?v=1682180468"/>
        </div>
        
        <div className="boosterContainer" onClick={routeChangeFS}>
            <img className="boosterPack2" src="https://images.rarecandy.com/tr:q-75/stores/1/inventory/16956597560691.png"/>
        </div>  

        <div className="boosterContainer" onClick={routeChangeBS2}>
            <img className="boosterPack2" src=" https://loosepacks.com/cdn/shop/products/Myproject_8_1_1296x1296.png?v=1697001178"/>
        </div>  

        <div className="boosterContainer" onClick={routeChangeTRS}>
            <img className="boosterPack4" src="https://loosepacks.com/cdn/shop/products/Myproject-1-2023-04-09T134918.744_1024x1024.png?v=1693347175"/>
        </div>


       


      </div>
    );
  }

  export default BoosterDisplay;


  



