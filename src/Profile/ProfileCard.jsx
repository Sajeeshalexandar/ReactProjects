import ProfileApp from "./ProfileApp";

function ProfileCard({image,name,role}){

    const styleprofile = {
        textAlign : "center",
        fontFamily : "arial",
        color : "red",
        backgroundColor : "green"
        }

    return(
        <>
        <div style={styleprofile}>
            <img src={image} alt="User image"  style={{width : "200px",height : "auto"}}/>
            <h3 >{name}</h3>
            <h1>{role}</h1>
        </div>
        </>
    )

}
export default ProfileCard