import './Gallery.css';

import BaseSet from '../../baseset.json'
import JungleSet from '../../jungleset.json'
import FossilSet from '../../fossilset.json'
import RocketSet from '../../rocketset.json'
import BaseSet2 from '../../baseset2.json'



function Gallery() { 
  return (
    <div className="Gallery">
      {/* <h1>            
            <img  src="https://archives.bulbagarden.net/media/upload/thumb/6/62/Pok%C3%A9mon_TCG_logo.png/1200px-Pok%C3%A9mon_TCG_logo.png"/>
      </h1> */}

      <div className="boosterPack999"> <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1280px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png"/> </div>
    {
      BaseSet && BaseSet.map( baseset => {
        return(
          <div className="pokebox" key={baseset.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={baseset.images.small} /> </p>
          </div>
        )
      })
    }
<div> <img src="https://den-media.pokellector.com/logos/Jungle.logo.120.png"/> </div>
{
      JungleSet && JungleSet.map( jungleset => {
        return(
          <div className="pokebox" key={jungleset.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={jungleset.images.small} /> </p>
          </div>
        )
      })
    }
  <div> <img src="https://cf.geekdo-images.com/AbdoTKtBYJcuRWQymXrEPA__itemrep/img/mTVBcYd1WZWYoHu3DS3taGc_DnQ=/fit-in/246x300/filters:strip_icc()/pic6488719.png" /></div>
{
      FossilSet && FossilSet.map( fossilset => {
        return(
          <div className="pokebox" key={fossilset.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={fossilset.images.small} /> </p>
          </div>
        )
      })
    }

<div> <img src="https://archives.bulbagarden.net/media/upload/2/20/Base_Set_2_Logo.png" /></div>
{
      BaseSet2 && BaseSet2.map( baseset2 => {
        return(
          <div className="pokebox" key={baseset2.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={baseset2.images.small} /> </p>
          </div>
        )
      })
    }


<div> <img src="https://pwtng.altervista.org/wp-content/uploads/2018/05/Logo_Team_Rocket.png" /></div>
{
      RocketSet && RocketSet.map( rocketset => {
        return(
          <div className="pokebox" key={rocketset.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={rocketset.images.small} /> </p>
          </div>
        )
      })
    }
    
    </div>



  );
}

export default Gallery;



