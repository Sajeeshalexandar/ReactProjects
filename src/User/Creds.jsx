import ValidUser from "./ValidUser"
import InvalidUser from "./InvalidUser"


function Creds({ username, pass }) {

    if(username === "admin" && pass === 123){
        return(<ValidUser/>)
    }
    else{
        return(<InvalidUser/>)
    }



    // var isValid = (username === "admin" && pass === 123);
    // return isValid ? <ValidUser /> : <InvalidUser />


}
export default Creds