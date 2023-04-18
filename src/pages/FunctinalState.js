import React,{useState} from "react";

function FunctinalState()
{
    let [state, setstate] = useState(0);
    
    let increment = ()=>{
        setstate(++state);
    }
   return(
    <>
    <h1>{state}</h1>
    <button onClick={increment}>Click</button>
    </>
   );
}
export default FunctinalState;