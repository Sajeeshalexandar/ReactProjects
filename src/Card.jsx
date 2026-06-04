import image from './assets/zatix.png'
import Button from './button.jsx';

import {name} from './Hello.jsx'

function Card(){

    return(
        <>
        <div className="card">
            <h1>{name}</h1>
            <img src={image} alt="user image" />
            <p>He is a beautifull person with pure heart and mind</p>
            <Button/>
        </div>
        </>
    );
}
export default Card