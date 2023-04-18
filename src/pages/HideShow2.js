import React,{ useState } from "react";
function HideShow2()
{
  let [state,changeState] = useState(false);


  let toggle = ()=>{
     changeState(state === false ? state = true : state = false );
  }
  let css;
 
  return(
    <>
     {state === false ? css = '{"display":"none"}' : css = '{"display":"block"}'}

    <h1 style={css}>
       CSS Toggle Content 
    </h1>
    
      <button onClick={toggle} >Hide / Show</button>
    </>
  );
}
export default HideShow2;