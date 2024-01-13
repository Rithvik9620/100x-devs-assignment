import React from 'react'

const Card = ({id,name,description,linkedIn,twitter,instagram,facebook,interests,handleDeleteButton,handleUpdateFromChildButton}) => {  
  return (
    <div style={{padding:'6px'}}>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href='linkedin'>Linkedin</a>
        <a href='twitter'>Twitter</a>
        <a href='instagram'>Instagram</a>
        <a href='facebook'>Facebook</a>
        {interests.map((interest,index) =><ul key={index}>{interest}</ul>)}
        <button onClick={()=>handleUpdateFromChildButton(id)}>Update</button>
        <button onClick={()=>handleDeleteButton(id)}>Delete</button>
    </div>
  )
}

export default Card