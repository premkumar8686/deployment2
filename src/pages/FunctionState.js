import React,{ useState } from "react";
function FunctionState()
{
    let [state, myState] = useState(0);
    
    let increment = ()=>{
        myState(state + 1);
        console.log('Updated value: ', state);
    }
  return(
    <>
      <h1>{state}</h1>
      <button onClick={increment} >Click</button>
    </>
  );
}
export default FunctionState;