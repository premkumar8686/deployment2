import { Component } from "react";
// Why I am not able to fix variable type
class ClassState extends Component
{
    state = {
        counter: 0,
    };
    
   

   increment = ()=>{

    //  this.setState({
    //     counter: this.state.counter + 1,
    //  },()=>{console.log(this.state.counter)});

     

     this.setState((prevState) => ({
        counter: prevState.counter + 1,
     }));
     
   }

   incrementCountFiveTimes = () => {
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
   }

   render(){
    return(
        <>
         <h1>{this.state.counter}</h1>

         <button onClick={this.increment}>Click</button>

         <button onClick={this.incrementCountFiveTimes}>Click 5</button>
        </>
    );
   }
}
export default ClassState;