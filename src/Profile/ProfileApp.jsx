import image from '../assets/zatix.png'
import ProfileCard from './profileCard';

function ProfileApp(){
    var userImage = image;
    var userName = "Sajeesh"
    var userRole = "FUll-Stack Developer"

    return(
        <>
        <ProfileCard image={userImage} name={userName} role={userRole} />
        </>
    )
}
export default ProfileApp