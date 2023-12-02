import React from "react";

const Info = ({info}) =>{
  return(
    <div>
      <img src={info.best_character.image} alt="bestCaracter" width={"300px"}/>
      <h1>{info.best_character.name}</h1>
      <h6>{info.best_character.affiliation}</h6>
      <p>{info.best_character.bio}</p>
    </div>
  )
}

export default Info;