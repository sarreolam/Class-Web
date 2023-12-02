import React from "react";

const Poster = ({general, setInfo}) =>{
  return(
    <div className="col-4" style={{marginBottom:"20px"}}>
      <img src={general.poster} height={"600px"} alt="poster" />
      <div className="container">

        <div style={{border: "1px solid", width:"100%"}}>
          <div className="col">
            {general.title}
            <br/>
            {general.year}
            <br/>
            <a onClick={()=>setInfo(general)} >More...</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster;