

function Button(){
    let count = 0;

    const buyNow = () => {
        if(count < 3){
            console.log(`Button Was click ${count} times`)
            count++;
        }else{
            console.log(`You have clicked more than three Times`)
        }
    }
    const buyNow2 = (e) =>{
        e.target.style.backgroundColor = "red"
    }


    
    return(
        <>
        <button id="followBtn" onClick={(event) => buyNow2(event)}>Buy Now</button>
       
        </>
    );
}
export default Button