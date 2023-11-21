import React from "react";
import { BSCRPacker, BSUCPacker, BSCPacker, BSEPacker } from './PackBuilder';
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

    let navigateTRS = useNavigate();
    const routeChangeTRS = () => {
      let TRSpath = `/Booster/TeamRocketSet`;
      navigateTRS(TRSpath)
    }

    return (
      <div className="Booster">
 
        <div className="boosterContainer" onClick={routeChangeBS}>
            <img className="boosterPack1" src="https://www.pokeflightclub.com/cdn/shop/products/Baseset3-pack.png?v=1674181020"/>
        </div>
        <div className="boosterContainer" onClick={routeChangeFS}>
            <img className="boosterPack2" src="https://images.rarecandy.com/tr:q-75/stores/1/inventory/16956597560691.png"/>
        </div>  
        <div className="boosterContainer" onClick={routeChangeJS}>
            <img className="boosterPack3" src="https://loosepacks.com/cdn/shop/products/Myproject-1_15_1024x1024.png?v=1682180468"/>
        </div>
        <div className="boosterContainer" onClick={routeChangeTRS}>
            <img className="boosterPack4" src="https://loosepacks.com/cdn/shop/products/Myproject-1-2023-04-09T134918.744_1024x1024.png?v=1693347175"/>
        </div>





      </div>
    );
  }

  export default BoosterDisplay;


  



