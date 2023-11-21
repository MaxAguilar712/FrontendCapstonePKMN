import './Gallery.css';

import BaseSet from '../../baseset.json'

function Gallery() { 
  return (
    <div className="Gallery">
      <h1>            
            <img className="boosterPack1" src="https://archives.bulbagarden.net/media/upload/thumb/6/62/Pok%C3%A9mon_TCG_logo.png/1200px-Pok%C3%A9mon_TCG_logo.png"/>
      </h1>


    {
      BaseSet && BaseSet.map( baseset => {
        return(
          <div className="pokebox" key={baseset.id}>
          
            <p className="pokedumpContainer" > <img className="pokedump" src={baseset.images.small} /> </p>
          </div>
        )
      })
    }
    </div>
  );
}

export default Gallery;



