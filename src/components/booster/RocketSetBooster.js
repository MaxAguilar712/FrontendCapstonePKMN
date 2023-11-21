import "./Booster.css"
import { BSCRPacker, BSUCPacker, BSCPacker, BSEPacker } from './PackBuilder';
import { useState, useEffect } from 'react';


function Booster() { 

  const [boosterPack, setBoosterPack] = useState([]);

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

    return (
      <div className="Booster">
 
        <div className="boosterContainer">
            <img className="boosterPack1" src="https://www.pokeflightclub.com/cdn/shop/products/Baseset3-pack.png?v=1674181020"/>
        </div>
{/* 
        <div className="boosterpacks" key={BoosterPack.id}>
          
            <p className="boosterContainer" > <img className="booster" src={BoosterPack.images.large} /> </p>
          </div> */}

          {
      boosterPack.map( booster => {
        return(
          <div className="boosterpack" key={booster.id}>
            <p className="boosterContainer" > <img className="booster" src={booster.images?.large} /> </p>
          </div>
        )
      })
    }
      </div>
    );
  }

  export default Booster;


  