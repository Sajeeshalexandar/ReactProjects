

function Studentz({name,age,department}){

    const styleCard = {
        backgroundColor : "yellow",
        fontFamily : "arial",
        borderRadius : "1rem",
        padding : "1rem 2rem",
        border : "none",
        textAlign : "center",
        width : "fit-content"
    }
    
    return(
        <>
        <div  style={styleCard}>
            <h1>Student Card</h1>
            <p><b>Name : </b>{name}</p>
            <p><b>Age : </b>{age}</p>
            <p><b>Department : </b>{department}</p>
        </div>
        </>
    )
}
export default Studentz