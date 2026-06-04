import Card from "./Card.jsx";
import Generate from './GenerateBtn.jsx'
import Hello from "./Hello.jsx";
import Navbar from "./Navbar.jsx";

import User from "./User/User.jsx";

import MainStudent from "./StudentDashboard/MainStudent.jsx";

import CardApp from "./Cards/CardApp.jsx";
function Home() {
    return (
        <>
            <section id="home">
                <Navbar/>
                {/* <Card/> */}
                {/* <User/> */}
                <CardApp/>
                
                {/* <MainStudent/> */}
            </section>
        </>
    )
}
export default Home