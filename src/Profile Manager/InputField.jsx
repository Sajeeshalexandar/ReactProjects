import { useState } from "react";

function InputFieldState(){
    const[name,setName]=useState('');

    
    const change = (event)=>{

  
        setName(event.target.value)
    
    }
    return(
        <>
        <h3>Enter your Name :</h3>
        <input type="text" value={name} placeholder="Enter your name" onChange={(event)=>change(event)} id="input"/>
        <p>you typed : {name}</p>
        <p>you typed : {name.toUpperCase()}</p>
        <p>Count of  characters  : {name.length}</p>
        <p>{(name == "" ? "Empty content" :  "Hello Zatrix")}</p>
        {name.length == 5? <p>punnya is penn kothichi</p> : <p>Who is punnya in {name.length} </p>}
        </>
    )  
}
export default InputFieldState