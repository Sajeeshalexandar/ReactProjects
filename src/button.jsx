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


    const buyNow1 = (e) =>{
        e.target.style.backgroundColor = "red"
        e.target.innerHTML = "Hai"
    }
    
    return(
        <>
        <button id="followBtn" style={{marginTop:"1.5rem"}} onClick={(event)=>buyNow1(event)}>Buy Now</button>
       
        </>
    );
}
export default Button