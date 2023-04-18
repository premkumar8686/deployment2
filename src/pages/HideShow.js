import React,{ useState } from "react";
function HideShow()
{
  let [state,changeState] = useState(false);


  let toggle = ()=>{
     changeState(state === false ? state = true : state = false );
  }

  return(
    <>
    <h1 style={{"height":"100px"}}>
      {state === false ? "Toggle Content" : ""}
    </h1>
      <button onClick={toggle} >Hide / Show</button>
    </>
  );
}
export default HideShow;