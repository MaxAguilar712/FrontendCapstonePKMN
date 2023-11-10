import './Gallery.css';

import BaseSet from '../../baseset.json'

function Gallery() { 
  return (
    <div className="Gallery">


    {
      BaseSet && BaseSet.map( baseset => {
        return(
          <div className="pokebox" key={baseset.id}>
            {/* <strong>{ baseset.name} </strong> */}
            <p className="pokedumpContainer" > <img className="pokedump" src={baseset.images.large} /> </p>
          </div>
        )
      })
    }
    </div>
  );
}

export default Gallery;
