// import React from "react";

// class Counter extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             name:"sajeesh",
//             age : 21
//         }
//     }
//     Change = () =>{
//         this.setState({
//             name : "Zatrix",
//             age : 100
//         })
//     }
//     changeAgain = () =>{
//         this.setState({
//             name : "User"
//         })
//     }
    
//     render(){
//         return(
//             <>
//             <div>
//                 <h1>Counter Function</h1>
//                 <p>Current name : {this.state.name} and Age is {this.state.age}</p>
//                 <button onClick={this.Change}>change</button>
//                 <button onClick={this.changeAgain}>again</button>
//             </div>
//             </>
//         )
//     }
    
// }
// export default Counter

import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount] = useState(0);

    useEffect(()=>{h
        setTimeout(()=>{
            setCount((count)=> count + 1)
        },1000);
    })
    return <h1>I've rendered {count} times!</h1>
}
export default Timer
