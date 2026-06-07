import MenuData from "./MenuData";
import MenuCategory from "./MenuCategory";
import ResturantNavbar from "./ResturantNavbar";


function ResturantApp(){

    const headstyle = {
        fontFamily:"arial",
        color:"orangered",
        textAlign : "center",
        padding : "3rem 0 0 0"
    }
    const cardStyle = {
        backgroundColor : "rgba(216, 216, 216, 0.22)"
    }
    return(
        <>
        <div style={cardStyle}>
            <ResturantNavbar/>
            <div style={{marginTop:"6.5rem"}}>
                {MenuData.map(data => (
                <MenuCategory

                key={data.id}
                category={data.category}
                items={data.items}

                />

            ))}
            </div>
            
        </div>
        </>
    )
}
export default ResturantApp