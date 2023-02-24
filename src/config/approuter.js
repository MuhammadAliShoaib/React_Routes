import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import About from "../screen/about";
import Home from "../screen/home";
import Contact from "../screen/contact";
import Services from "../screen/services";
import Skills from "../screen/skills";

function Approuter() {
    return (

        
        <BrowserRouter>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/skills">Skills</Link>
        </nav>

            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="skills" element={<Skills/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter;