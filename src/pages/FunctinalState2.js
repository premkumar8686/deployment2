import React,{useState} from "react";

function FunctinalState2()
{
   let [a , b] = useState(0);

   let increment = ()=>{
      b(++a);
   }

   return(
   <>
    <h1>{a}</h1>
    <button onClick={increment}>Click</button>
   </>
   );
}
export default FunctinalState2;