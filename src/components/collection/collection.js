

import { useEffect, useState } from "react"
import "../booster/Booster.css"

export const Collection = () => {



       const [cards, setCards] = useState([])
        

    useEffect(
        () => {
            fetch(`http://localhost:8088/cards`)
            
            .then(response => response.json())
            .then((cardsArray) => {
                setCards(cardsArray)
            })
        },
        []
    )
    
      const FavoriteFunc = (event) => {

        fetch(`http://localhost:8088/cards/${event.target.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              isFavorite: JSON.parse(event.target.value),
            }),
            headers: {
              'Content-type': 'application/json'
            },
          })
            .then((response) => response.json()) 
            .then(()=>{
                fetch(`http://localhost:8088/cards`)
            
                .then(response => response.json())
                .then((cardsArray) => {
                    setCards(cardsArray)
                })
            })
           

      }


    const deleteCard = (id) => {

       fetch(`http://localhost:8088/cards/${id}`, {
            method: 'DELETE' })
        .then(() => {
            fetch(`http://localhost:8088/cards`)
            
            .then(response => response.json())
            .then((cardsArray) => {
                setCards(cardsArray)
            })
        })
    }

    return (
        <div className="Booster">
    
    {
      cards.map( card => {
        return( <>
          <div className="boosterpack" key={card.id} >
            <p className="boosterContainer" > <img className="booster" src={card.image}  /> </p>
           { (card.isFavorite) ? <button className="favorites" id={card.id} value={false} onClick={FavoriteFunc}>❤️</button> : <button className="favorites" id={card.id} value={true} onClick={FavoriteFunc}>🖤</button>}

           <button className="deleteCard" id={`collection--${card.id}`} onClick={() => deleteCard(card.id)}>❌</button>
          </div> 
          
        </>
        )
      })
    }


        {/* <button onClick={(event) => {

event.preventDefault()
// taco(0)
// cards.forEach(x, index => {
//   if(index === 0 ){

fetch(`http://localhost:8088/cards?userId=${JSON.parse(localStorage.getItem("activeUser")).id}`, {
      method: "DELETE"})    



        }}> DELETE ALL </button> */}
        </div>
      );
    }
    
