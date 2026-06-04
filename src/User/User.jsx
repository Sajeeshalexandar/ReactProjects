import Creds from "./Creds"
import './User.css'


function User(){
    return(
        <>
        <Creds username="admin" pass={123}/>
        </>
    )
}
export default User