import React, { useEffect, useState } from 'react'
import Card from './Card';

const Home = () => {
  const [cards,setCards] = useState([]);
  const [add,setAdd] = useState(true);
  const [card,setCard] = useState({name:"",description:"",linkedIn:"",twitter:"",instagram:"",facebook:"",interests:""});
  const [prevcard,setPrevCard] = useState({name:"",description:"",linkedIn:"",twitter:"",instagram:"",facebook:"",interests:""});

  useEffect(()=>{
    fetch("http://localhost:4000").then((res)=>{
        res.json().then((data)=>{console.log(data) ; setCards(data)});
    })
  },[])

  const handleUpdateFromChildButton = (id) =>{
    console.log(`http://localhost:4000/single?id=${id}`);
    fetch(`http://localhost:4000/single?id=${id}`).then((res)=>{
        res.json().then((data)=>{
          console.log(data);
          const int = data[0].interests.join(" ");
          const newCard = {name:data[0].name,description:data[0].description,linkedIn:data[0].linkedIn,twitter:data[0].twitter,instagram:data[0].instagram,facebook:data[0].facebook,interests:int};
          setCard(newCard);
          setPrevCard(newCard);
          setAdd(!add);
        });
    })
  }

  const handleDeleteButton = (id) =>{
    const filteredCards = cards.filter(card => card._id != id)
    console.log(id +  " " + JSON.stringify({id:id.toString()}));    
    fetch("http://localhost:4000/delete",{method:'DELETE',headers: {
        'Content-Type': 'application/json',
        // Additional headers if needed
      },body:JSON.stringify({id:id.toString()})}).then(()=>{
        setCards(filteredCards);
    })
  }

  const handleAddButton = ()=>{
    const newcard = {name:card.name,description:card.description,linkedIn:card.linkedIn,twitter:card.twitter,instagram:card.instagram,facebook:card.facebook,interests:card.interests.split(" ")}
    fetch("http://localhost:4000/save",{method:'POST',headers: {
      'Content-Type': 'application/json'},body:JSON.stringify(newcard)}).then((res)=>{
    }).then(()=>{setCards([...cards,newcard]); setCard({name:"",description:"",linkedIn:"",twitter:"",instagram:"",facebook:"",interests:""})})
  }

  const handleUpdateButton = ()=>{
    const interests = prevcard.interests;
    const oldCard = {...prevcard,interests:interests.split(" ")}
    console.log(oldCard);
    const newcard = {name:card.name,description:card.description,linkedIn:card.linkedIn,twitter:card.twitter,instagram:card.instagram,facebook:card.facebook,interests:card.interests.split(" ")};
    fetch("http://localhost:4000/update",{method:'PUT',headers: {
      'Content-Type': 'application/json',
      // You may need to include other headers like authorization tokens if required
    },body:JSON.stringify({oldCard:oldCard,newCard:newcard})}).then((returnCard)=>{
      console.log();
      returnCard.json().then((returnedCard)=>{
        console.log(returnedCard)
        const updatedCards = cards.map(Card=> Card.name === returnedCard.name ? returnedCard : Card);
        setCards(updatedCards);
        setCard({name:"",description:"",linkedIn:"",twitter:"",instagram:"",facebook:"",interests:""});
        setAdd(!add);
      })
    })
  }

  return (
    <div>
      <input id='name' type='text' placeholder='Your name' value={card.name} onChange={(e)=>setCard({...card,name:e.target.value})}/>
      <br/>
      <br/>
      <input id='description' type='text' placeholder='Description' value={card.description} onChange={(e)=>setCard({...card,description:e.target.value})}/>
      <br/>
      <br/>
      <input id='linkedin' type='text' placeholder='Your Linkedin username' value={card.linkedIn} onChange={(e)=>setCard({...card,linkedIn:e.target.value})}/>
      <br/>
      <br/>
      <input id='twitter' type='text' placeholder='Your Twitter username' value={card.twitter} onChange={(e)=>setCard({...card,twitter:e.target.value})}/>
      <br/>
      <br/>
      <input id='instagram' type='text' placeholder='Your Instagram username' value={card.instagram} onChange={(e)=>setCard({...card,instagram:e.target.value})}/>
      <br/>
      <br/>
      <input id='facebook' type='text' placeholder='Your Facebook username' value={card.facebook} onChange={(e)=>setCard({...card,facebook:e.target.value})}/>
      <br/>
      <br/>
      <input id='interests' type='text' placeholder='Type interests giving spaces' value={card.interests} onChange={(e)=>setCard({...card,interests:e.target.value})}/>
      <br/>
      <br/>
      {add ? <button onClick={handleAddButton}>Add</button> : <button onClick={handleUpdateButton}>Update</button>}
      <div style={{display:'flex'}}>{cards.map(card=><Card key={card._id} id={card._id} name={card.name} description={card.description} linkedIn={card.linkedIn} twitter={card.twitter} instagram={card.instagram} facebook={card.facebook} interests={card.interests} handleDeleteButton={handleDeleteButton} handleUpdateFromChildButton={handleUpdateFromChildButton}/>)}</div>  
      </div>
  )
}

export default Home