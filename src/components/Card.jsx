import React from "react";


function Card(props){
  const link= props.link;
    return (<>
   <div className="card mt-3">
  <img src={props.imgsrc} className="card-img-top" alt="..." style={{borderRadius:"30px 0 0 0"}}/>
  <div className="card-body d-flex flex-column justify-content-center">
    <h5 className="card-title text-center mt-3 text-light">{props.sname}</h5>
<button className="card_btn mx-auto mt-2 mb-4 py-2" ><a href={link} rel="noreferrer" target="_blank">Watch Online</a> </button>
  </div>
</div>
    </>)

}
export default Card;

