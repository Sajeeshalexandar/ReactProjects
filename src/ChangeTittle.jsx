import { useState, useEffect } from "react";

function ChangeTittle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 5) {
            document.title = "haloo"
        } else {
            document.title = "Belin"
        }

    })
    return (

        <>
            <h1>Dynamic Tittle</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
        
    )
}
export default ChangeTittle