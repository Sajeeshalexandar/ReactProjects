import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"

function Appz(){
    return(
        <Router>
        <div>
            <ul class="nav nav-tabs">
  
  <li class="nav-item">
    <a class="nav-link"><Link to='/' style={{textDecoration:"none"}}>Home</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><Link to="/about" style={{textDecoration:"none"}}>About</Link></a>
  </li>
 
</ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
        </Router>
    )
}
export default Appz